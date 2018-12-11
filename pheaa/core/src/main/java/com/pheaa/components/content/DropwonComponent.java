package com.pheaa.components.content;

import org.apache.sling.api.resource.ValueMap;
import java.lang.String;
import com.adobe.cq.sightly.WCMUsePojo;
/*
 * Author:Wipro
 * Description: Get the selected Value from the Dialog
 */

public class DropwonComponent extends WCMUsePojo {


	    private static final String VALUE = "displayAs";
	    private static final String DEFAULT_VALUE = "green";

	    private String type = "";
	    
	   public void activate() throws Exception {
		 

	        ValueMap properties = getProperties();
	        type = properties.get(VALUE, DEFAULT_VALUE);
	    }

	    public String getType() {
	        return type;
	    }
	}