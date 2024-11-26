# basicnorthodata
Develop Your First SAPUI5 Web App with SAP Business Application Studio
https://developers.sap.com/group.sapui5-cf-bas.html

Fiori Dev Space with Development Tools for SAP Build Work Zone extension

Entitlement/service
- Authorization and Trust Management Service (instance)
- Build Workzone (service)
- SAP Business Application Studio 

Created 2 destinations in BTP CloudFoundry
- https://sapes5.sapdevcenter.com (S0025577307-Rami123)
- https://services.odata.org

New Template + Fiori + Basic + **oData Servicce**
(https://services.odata.org/V2/Northwind/Northwind.svc/)
Add deployment configuration (Yes)
Cloud Foundry + select Destination(norhtwind) from list
Preview, start-noflp

Build, mta.yaml & deploy .mtar
Available in Cloud Foundry - HTML5 Applications

Your free tier usage limit exceeded. Upgrade to the Standard plan to continue with deployment.
**cf deploy mta_archives/sapbtpbasicnorthodata_0.0.1.mtar**

**simple design with oData**
Add Views and Define Routes to Access Them
Filter option in List report with detail screen
List.view_wihtoutSMART.xml (normal)
List.view.xml (smart)

# basicdesign (local JSON)
New Template + Fiori App Generator + Basic + datasource **None**
Add deployment configuration (Yes)
Cloud Foundry + NONE
Preview, start-noflp


