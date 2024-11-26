sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/model/json/JSONModel'
], (Controller,JSONModel) => {
    "use strict";

    return Controller.extend("sap.ui5.basicdesign.controller.View1", {
        onInit() {
            this.oModel = new JSONModel();
			this.oModel.loadData(sap.ui.require.toUrl("sap/ui5/basicdesign/mockserver/model.json"), null, false);
			this.getView().setModel(this.oModel);

            var oFilter = this.getView().byId("filterBar"),
			that = this;

            // oFilter.addEventDelegate({
			// 	"onAfterRendering": function(oEvent) {
			// 		var oResourceBundle = that.getOwnerComponent().getModel("i18n").getResourceBundle();
            //         //var oButton = oEvent.srcControl._oSearchButton;
            //         var oButton = oEvent.getSource()._oSearchButton;
			// 		oButton.setText(oResourceBundle.getText("goButton"));
			// 	}
			// });
				
			// oFilter.addEventDelegate({
			// 	onAfterRendering: function(oEvent) {
            //         var i18nModel = that.getOwnerComponent().getModel("i18n");
            //         this.oBundle = i18nModel.getResourceBundle();
            //         var goBtn = evt.getSource()._oSearchButton;

            //         goBtn.setText((this.oBundle.getText("goButton")));

			// 		// var oResourceBundle = that.getOwnerComponent().getModel("i18n").getResourceBundle();
			// 		// var oButton = oEvent.srcControl._oSearchButton;
			// 		// oButton.setText(oResourceBundle.getText("goButton"));
			// 	}
			// });

            // var b = this.getView().byId("filterBar").getContent()[0].getContent();
            // $.each(b, function (index, item) {
            //     if (item.sId.search("btnGo") !== -1) {
            //         item.setText("Search");
            //     }
            // });
         },

         initializedSmartFilterbar:function(evt){
            var i18nModel = this.getOwnerComponent().getModel("i18n");            
            this.oBundle = i18nModel.getResourceBundle();            
            var goBtn = evt.getSource()._oSearchButton;            
            goBtn.setText((this.oBundle.getText("goButton")));
            
            }
    });
});