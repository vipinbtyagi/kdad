package com.pheaa.components.content;

import org.apache.sling.api.resource.ValueMap;

import com.adobe.cq.sightly.WCMUsePojo;

public class LoneSummary extends WCMUsePojo {


    private static final String LONE = "lone";
    private static final String PAID = "paid";
    private static final String floatERESTRATES = "floaterestrates";
    private static final int DEFAULT_VALUE = 1;

    private float loneValue =  0;
	private float paidValue =  0;
    private float balance = 0;
    private float floateresAmount = 0;
    private float floaterest = 0;
    private float tobePaid = 0;
    private float paidPer = 0;
    private float tobePaidPer = 0;
    private float per =0;
   public void activate() throws Exception {
	 
        ValueMap properties = getProperties();
        loneValue = properties.get(LONE, DEFAULT_VALUE);
        paidValue = properties.get(PAID, DEFAULT_VALUE);
        floaterest = properties.get(floatERESTRATES, DEFAULT_VALUE);
        balance =  loneValue >= paidValue?loneValue - paidValue:0;
        floateresAmount = balance > 0 ?balance*(1+floaterest*1):0;
        paidPer = paidValue / loneValue * 100;
        tobePaidPer = paidPer < 100? paidPer + 5:100;
        per = (300*paidPer)/100;
    }

   public float getLoneValue() {
		return loneValue;
	}
	
	public float getPaidValue() {
		
		return paidValue;
	}
	
	public float getBalance() {
		return balance;
	}
	
	public float getTnteresAmount() {
		return floateresAmount;
	}
	
	public float getTobePaid() {
		
		tobePaid = balance+floateresAmount;
		return tobePaid;
	}
	public String getPaidPer() {
		return String.format("%.1f", paidPer); 
	}
	public float getTobePaidPer() {
		return tobePaidPer;
	}
	public String getBlueValue() {
		return String.format("%.0f", per+5);
	}
	public String getgreenValue() {
		return String.format("%.0f", per);
	}
	
}