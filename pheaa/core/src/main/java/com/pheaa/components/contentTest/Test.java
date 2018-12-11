package com.pheaa.components.contentTest;


public class Test {


	    private static final String LONE = "lone";
	    private static final String PAID = "paid";
	    private static final String floatERESTRATES = "floaterestrates";
	    private static final float DEFAULT_VALUE =	1;

	    private static float loneValue =  0;
		private static float paidValue =  0;
	    private static float balance = 0;
	    private static float floateresAmount = 0;
	    private static float floaterest = 0;
	    private static float tobePaid = 0;
	    private static float  paidPer = 0;
	    private static float tobePaidPer = 0;
	    public static void main(String[] args) {
	    	    loneValue = 1600;
		        paidValue = 1500;
		        floaterest = 3;
		        balance =  loneValue >= paidValue?loneValue - paidValue:0;
		        floateresAmount = balance > 0 ?balance*(1+floaterest*1):0;
		        paidPer = paidValue / loneValue * 100;
		        tobePaidPer = paidPer < 100? paidPer + 5:100;
		        
		        System.out.println(new Test().getgreenValue());
		       
		}
	 
	   public double getLoneValue() {
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
		public String  getPaidPer() {
			return String.format("%.2f", paidPer);
		}
		public float getTobePaidPer() {
			return tobePaidPer + 5;
		}
		public String getBlueValue() {
			
			return String.format("%.0f", 200+paidPer);
		}
		public String getgreenValue() {
			return String.format("%.0f", 210+paidPer);
		}
}
		