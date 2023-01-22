TW.IDE.Widgets.ReadExcelFileUpload = function () {
    // this.widgetIconUrl = function () {
    //     return "http://localhost:8015/Thingworx/Common/thingworx/widgets/mashup/mashup.ide.png";
    // };

    this.widgetProperties = function () {
        var properties = {
            name: "ReadExcelFileUpload",
            description: "ReadExcelFileUpload Chart",
            category: ["Common"],
            isExtension: true,
            supportsAutoResize: true,
            properties: {
                // DataMaintanance: {
                //     baseType: "INFOTABLE",
                //     isBindingTarget: true,
                // },
                // DataMaintanance: {
                //     baseType: "INFOTABLE",
                //     isBindingTarget: true,
                // },
                JSONOutdata: {
                    baseType: "JSON",
                    defaultValue: JSON.stringify({ data : []}),
                    isBindingSource: true,
                },
                Offest: {
                    baseType: "NUMBER",
                    defaultValue: 0,
                    isBindingSource: true,
                },

                fileName : {

                    baseType: "STRING",
                    defaultValue: "",
                    isBindingSource: true,
                }
            },


        };

        return properties;
    };

    // The function is called before any property is updated in the ThingWorx Composer. You can perform validations on the new property value before it is committed. If the validation fails, you can return a message string to inform the user about the invalid input. The new property value is not be committed. If nothing is returned during the validation, then the value is assumed valid.
    this.beforeSetProperty = function (name, value) {};

    this.afterSetProperty = function (name, value) {
        this.updatedProperties();
        return true;
    };

    this.afterLoad = function () {};

    this.renderHtml = function () {
        return '<div class="widget-content widget-ReadExcelFileUpload"></div>';
    };

    this.afterRender = function () {
        // console.log("widht screen detector after click", window.innerWidth)
        // console.log("heiht screen detector after click", window.innerHeight)
        // this.setProperty("ScreenWidth",  window.innerWidth);
        // this.setProperty("ScreenHeight", window.innerHeight);
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

        //     console.log("widgetProps running ScreenDetectorv2 after click");
        //     console.log(widgetProps);
        // } catch (error) {
        //     console.log("error");
        //     console.log(error);
        // }

        this.setupWidget();
    };

    this.setupWidget = function () {
        var widgetID = this.jqElementId;

        d3.select(`#${widgetID}`).selectAll("*").remove();
        // Handle Properties
        try {
            var allWidgetProps = this.allWidgetProperties().properties;

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

            console.log("widgetProps idle ReadExcelFileUpload");
            console.log(widgetProps);
        } catch (error) {
            console.log("error");
            console.log(error);
        }

        // var inputbody =  d3.select(`#${widgetID}`).append("input").attr("type","file").attr("id","inputexcel").attr("accept",".xls,.xlsx").style("display","none")
        // var labelbody = d3
        // .select(`#${widgetID}`)
        // .append("label")
        // .attr("class", "button-in-label")
        // .attr("for", "inputexcel");


        // var labelbody = d3.select(`#${widgetID}`).append("label").attr("class","button-in-label").attr("for","input")
        

      };

    this.widgetServices = function () {
        return {
            OpenFile: {
                description: "",
            },

            RemoveFile: {
                description: "",
            },


        };

    };

    this.widgetEvents = function () {
        return {

            OnChange: {
                description: "",
            },
        };
    };
};
