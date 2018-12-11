(function ($) {

        $.fn.doughnutChart = function (options) {
            var settings = $.extend({
                positiveColor: 'rgb(255, 255, 0)',
                negativeColor:  'rgb(0, 150, 0)',
                backgroundColor: "white",
                percentage : 68,
                size: 150,
                doughnutSize: 0.45,
                innerText: "68%",
                innerTextOffset: 12,
                positiveText: "176 days travelling",
                negativeText : "84 days home"
            }, options);


            //Main Layout
            var svgns = "http://www.w3.org/2000/svg";
            var chart = document.createElementNS(svgns, "svg:svg");
            chart.setAttribute("width", (settings.size * 3));
            chart.setAttribute("height", settings.size + 50);
            var center = (settings.size / 2);
            chart.setAttribute("viewBox", "0 0 " + (settings.size * 3) + " " + settings.size);
            var back = document.createElementNS(svgns, "circle");
            back.setAttributeNS(null, "cx", center);
            back.setAttributeNS(null, "cy", center);
            back.setAttributeNS(null, "r", center);
            back.setAttributeNS(null, "fill", settings.negativeColor);
            chart.appendChild(back);

            // primary slice
            var path = document.createElementNS(svgns, "path");
            var unit = (Math.PI * 2) / 100;
            var startangle = 0;
            var endangle = settings.percentage * unit - 0.001;
            var x1 = center + center * Math.sin(startangle);
            var y1 = center - center * Math.cos(startangle);
            var x2 = center + center * Math.sin(endangle);
            var y2 = center - center * Math.cos(endangle);
            var big = 0;
            if (endangle - startangle > Math.PI) {
                big = 1;
            }
            //Draw the main path
            var d = "M " + center + "," + center +      // Start at circle center
                " L " + x1 + "," + y1 +                 // Draw line to (x1,y1)
                " A " + center + "," + center +         // Draw an arc of radius r
                " 0 " + big + " 1 " +                   // Arc details...
                x2 + "," + y2 +                         // Arc goes to (x2,y2)
                " Z";                                   // Close path back to (cx,cy)
            path.setAttribute("d", d); 
            path.setAttribute("fill", settings.positiveColor);
            chart.appendChild(path); // Add slice to chart

            // foreground circle
            var front = document.createElementNS(svgns, "circle");
            front.setAttributeNS(null, "cx", center);
            front.setAttributeNS(null, "cy", center);
            front.setAttributeNS(null, "r", (settings.size * settings.doughnutSize)); 
            front.setAttributeNS(null, "fill", settings.backgroundColor);
            chart.appendChild(front);

            //Inner text
            var newText = document.createElementNS(svgns, "text");
            newText.setAttributeNS(null, "x", center-settings.innerTextOffset);
            newText.setAttributeNS(null, "y", 80);
            newText.setAttribute("font-weight", "bold");
            newText.setAttribute("font-size", "large");
            var textNode = document.createTextNode(settings.innerText);
            newText.appendChild(textNode);
            chart.appendChild(newText);

            //Positive rectangle

            var rect = document.createElementNS(svgns, "circle");
            rect.setAttributeNS(null, "cx", 200);
            rect.setAttributeNS(null, "cy", 55);
            rect.setAttributeNS(null, "r", 6); 
            rect.setAttributeNS(null, "fill", "yellow");
            chart.appendChild(rect);


            //Negative rectangle
			var rect2 = document.createElementNS(svgns, "circle");
            rect2.setAttributeNS(null, "cx", 200);
            rect2.setAttributeNS(null, "cy", 80);
            rect2.setAttributeNS(null, "r", 6); 
            rect2.setAttributeNS(null, "fill", "green");
            chart.appendChild(rect2);


            //Positive text
            var newText3 = document.createElementNS(svgns, "text");
            newText3.setAttributeNS(null, "x", 215);
            newText3.setAttributeNS(null, "y", 55);
            var textNode3 = document.createTextNode(settings.positiveText);
            newText3.appendChild(textNode3);
            chart.appendChild(newText3);

        //Percentage 
			var principal = settings.percentage + "%";
            var newText5 = document.createElementNS(svgns, "text");
            newText5.setAttributeNS(null, "x", 320);
            newText5.setAttributeNS(null, "y", 55);
        	newText5.setAttribute("font-size", 25);
            var textNode5 = document.createTextNode(principal);
            newText5.appendChild(textNode5);
            chart.appendChild(newText5);

            //Negative text
            var newText4 = document.createElementNS(svgns, "text");
            newText4.setAttributeNS(null, "x", 215);
            newText4.setAttributeNS(null, "y", 80);
            var textNode4 = document.createTextNode(settings.negativeText);
            newText4.appendChild(textNode4);
            chart.appendChild(newText4);

        //intrest
        	var intrest = (100 - settings.percentage) + "%";
        	var newText6 = document.createElementNS(svgns, "text");
            newText6.setAttributeNS(null, "x", 320);
            newText6.setAttributeNS(null, "y", 80);
        	newText6.setAttribute("font-size", 25);
            var textNode6 = document.createTextNode(intrest);
            newText6.appendChild(textNode6);
            chart.appendChild(newText6);

            $(this).append(chart);
            this
            return this;
        };

    }(jQuery));