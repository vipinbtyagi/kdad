$( document ).ready(function() {

        var id=1;

        $.ajax({
            url: "http://jsonplaceholder.typicode.com/users/"+ id,
            cache: false,
            success: function(data){
            //Note: get next payment from service
            var nextPayment="$200";

                $('.container2').doughnutChart({
                        positiveColor: "#fffb35",
                        negativeColor: "#26a831",
                        backgroundColor: "white",
                        percentage: 70,
                        size: 150,
                        doughnutSize: 0.47,
                        innerText: nextPayment,
                        innerTextOffset: 10,
                        positiveText: "Towards intrest",
                        negativeText: "Towards principle"
                    });

        }
      });

});
