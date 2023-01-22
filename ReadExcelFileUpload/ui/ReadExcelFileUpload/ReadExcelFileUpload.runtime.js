TW.Runtime.Widgets.ReadExcelFileUpload = function () {
    this.renderHtml = function () {
        // return any HTML you want rendered for your widget
        // If you want it to change depending on properties that the user
        // has set, you can use this.getProperty(propertyName). In
        // this example, we'll just return static HTML
        return `<div class="widget-content widget-ReadExcelFileUpload"></div>`;
    };

    // };

    this.updateProperty = function (updatePropertyInfo) {
        // TargetProperty tells you which of your bound properties changed

        this.setProperty(
            updatePropertyInfo.TargetProperty,
            updatePropertyInfo.SinglePropertyValue
        );

        // if (updatePropertyInfo.TargetProperty === "DataMaintanance") {
        //     // //console.log("updatePropertyInfo.RawDataFromInvoke.rows");
        //     // //console.log(updatePropertyInfo.RawDataFromInvoke.rows);
        //     this.setProperty(
        //         "DataMaintanance",
        //         updatePropertyInfo.RawDataFromInvoke.rows
        //     );
        // }

        if (updatePropertyInfo.TargetProperty === "JSONOutdata") {
            //console.log("updatePropertyInfo.RawDataFromInvoke.array")

            //console.log(updatePropertyInfo.RawDataFromInvoke.array)
            this.setProperty("JSONOutdata", updatePropertyInfo.RawDataFromInvoke.array);
           
        }


        this.setupWidget();
    };

    this.afterRender = function () {
        this.setupWidget();
    };

    this.serviceInvoked = function (serviceName) {

        if (serviceName == "OpenFile"){

            document.getElementById("inputexcel").click();

        }else if (serviceName == "RemoveFile"){

            document.getElementById('inputexcel').value = "";

            this.setProperty("fileName","");
            this.setProperty("JSONOutdata",JSON.stringify({ data : []}) );

        }

        // try {
        //     var allWidgetProps = this.properties;

        //     var widgetProps = {};

        //     for (const [key, value] of Object.entries(allWidgetProps)) {
        //         if (key.includes("Style")) {
        //             widgetProps[key] = TW.getStyleFromStyleDefinition(
        //                 this.getProperty(key)
        //             );
        //         } else {
        //             widgetProps[key] = this.getProperty(key);
        //         }
        //     }
          
        //     //console.log("widgetProps running clcik trigger");
        //     //console.log(widgetProps);
            
        // } catch (error) {
        //     //console.log("error");
        //     //console.log(error);
        // }
       
        // this.setupWidget();

        // d3.select("#inputexcel").on("click")();
      
       
      
    };

    this.setupWidget = function () {
        var widgetID = this.jqElementId;

        // Remove all old/existing DOM element
        d3.select(`#${widgetID}`).selectAll("*").remove();
        // Handle Properties
        try {
            var allWidgetProps = this.properties;
            //console.log("allWidgetProps widget-ReadExcelFileUpload")

            //console.log(allWidgetProps)

            var widgetProps = {};

            for (const [key, value] of Object.entries(allWidgetProps)) {
                if (key.includes("Style")) {
                    widgetProps[key] = TW.getStyleFromStyleDefinition(
                        this.getProperty(key)
                    );
                } else {
                    widgetProps[key] = this.getProperty(key);
                }
            }

            //console.log("widgetProps running widget-ReadExcelFileUpload");
            //console.log(widgetProps);
        } catch (error) {
            //console.log("error");
            //console.log(error);
        }

        var offset = widgetProps.Offest || 0 ;
        var inputbody = d3
            .select(`#${widgetID}`)
            .append("input")
            .attr("type", "file")
            .attr("id", "inputexcel")
            .attr("accept", ".xls,.xlsx")
            .style("display", "none");

        // var labelbody = d3
        //     .select(`#${widgetID}`)
        //     .append("label")
        //     .attr("class", "button-in-label")
        //     .attr("id","labelinputexcel")
            // .attr("for", "inputexcel");
        // var buttonHTML = document.getElementById("labelinputexcel");
        // var inputHTML = document.getElementById("inputexcel");
        // buttonHTML.addEventListener("click", function () {
        //     inputHTML.click();
        // });

        const alphatonumber = (str) => {
            return str.charCodeAt(0) - 65;
        };

        const numbertoalpha = (num) => {
            return String.fromCharCode(num + 65);
        };

        const getallproperty = ()=>{

            var allWidgetProps = this.properties;

            var widgetProps = {};

            for (const [key, value] of Object.entries(allWidgetProps)) {
                if (key.includes("Style")) {
                    widgetProps[key] = TW.getStyleFromStyleDefinition(
                        this.getProperty(key)
                    );
                } else {
                    widgetProps[key] = this.getProperty(key);
                }
            }

            //console.log("widgetProps all property");
            //console.log(widgetProps);
        }

        let selectedFile;

        document
            .getElementById("inputexcel")
            .addEventListener("change", (event) => {
                var selectedFile = event.target.files[0];
                //console.log("selectedFile");
                //console.log(selectedFile);

                if (selectedFile) {
                    let fileReader = new FileReader();
                    fileReader.readAsBinaryString(selectedFile);
                    fileReader.onload = (event) => {
                        let data = event.target.result;
                        var datax = new Uint8Array(event.target.result);

                        let workbook = XLSX.read(data, { type: "binary" });
                        //  //console.log("workbook");
                        //  //console.log(workbook);
                        // //console.log(workbook.SheetNames[0]);
                        //console.log(workbook.Sheets[workbook.SheetNames[0]]);
                        var dataworkbooksheet =
                            workbook.Sheets[workbook.SheetNames[0]];
                        // //console.log(workbook.Sheets[workbook.SheetNames[0]]["!ref"]);

                        var stringarray =
                            workbook.Sheets[workbook.SheetNames[0]]["!ref"];
                        var splitstring = stringarray.split(":");
                        //console.log(splitstring);

                        //     //console.log(datasplit)
                        var num1 = splitstring[0].match(/\d+/g);
                        var letr1 = splitstring[0].match(/[a-zA-Z]+/g);

                        // })
                        var num2 = splitstring[1].match(/\d+/g);
                        var letr2 = splitstring[1].match(/[a-zA-Z]+/g);

                        let arrayofarray = [];

                        for (
                            let index = offset;
                            index <= parseInt(num2[0]) - 1;
                            index++
                        ) {
                            var arraychild = [];

                            for (
                                let index2 = 0;
                                index2 <= alphatonumber(letr2[0]);
                                index2++
                            ) {
                                // arraychild.push(numbertoalpha(index2 )+(index+1) );
                                arraychild.push(
                                    dataworkbooksheet[
                                        numbertoalpha(index2) + (index + 1)
                                    ]
                                        ? dataworkbooksheet[
                                              numbertoalpha(index2) +
                                                  (index + 1)
                                          ].v
                                        : null
                                );
                            }
                            arrayofarray.push(arraychild);
                        }

                        //console.log(arrayofarray);

                        var listoutput = [];
                        var datatesting = arrayofarray;
                        datatesting.forEach((testing, i) => {
                            if (i > 0) {
                                var objtemp = {};
                                testing.forEach((test, j) => {
                                    if (datatesting[0][j]) {
                                        objtemp[datatesting[0][j]] = testing[j];
                                    } else {
                                        objtemp["empty_" + j] = testing[j];
                                    }
                                });
                                listoutput.push(objtemp);
                            }
                        });
                        //console.log("listoutput");

                        //console.log(listoutput);
                        this.setProperty("fileName",selectedFile.name );

                        this.setProperty("JSONOutdata",JSON.stringify({ data : listoutput}) );

                        // getallproperty();
                        this.jqElement.triggerHandler("OnChange");
                        //  workbook.SheetNames.forEach(sheet => {
                        //   let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
                        // let rowObject = XLSX.utils.sheet_to_row_object_array(
                        //     workbook.Sheets[workbook.SheetNames[0]]
                        // );

                        // //console.log("rowObject");
                        // //console.log(rowObject);

                        // document.getElementById("jsondata").innerHTML = JSON.stringify(
                        //     listoutput,
                        //     undefined,
                        //     4
                        // );
                        //  });
                    };
                }
            });
    };

};
