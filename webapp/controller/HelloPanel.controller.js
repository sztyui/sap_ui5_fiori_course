sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast", "sap/ui/core/Fragment"],
  function (Controller, MessageToast, Fragment) {
    return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel", {
      onShowHello: function () {
        // show a MessageToast
        MessageToast.show(
          this.getView()
            .getModel("i18n")
            .getResourceBundle()
            .getText("helloMsg", [
              this.getView().getModel().getProperty("/recipient/name"),
            ])
        );
      },
      onOpenDialog: function () {
        var oView = this.getView();

        // create dialog lazily
        if (!this.byId("helloDialog")) {
          // load asynchrounsly XML fragment
          Fragment.load({
            id: oView.getId(),
            name: "sap.ui.demo.walkthrough.view.HelloDialog",
          }).then(function (oDialog) {
            // conect dialog to view (models, lifecycle)
            oView.addDependent(oDialog);
            oDialog.open();
          });
        } else {
          this.byId("helloDialog").open();
        }
      },
    });
  }
);
