const substrings = [
          //Office of the Correctional Investigator
            'www.oci-bec.gc.ca',
            'oci-bec.gc.ca',
           //MSCA-MEIIO
            'srv241-s2.lab.hrdc-drhc.gc.ca',
            //Booking Tool
            'apps.canada.ca',
            'gcbooking.adobecqms.net',
           //Canada.ca
            'www.canada.ca',
            'canada-stage-aem62s3.adobecqms.net',
            'canada-dev-aem62s3.adobecqms.net', // Enable Pierre testing on AEM DEV
            'staging65s3.canada.ca',
            'canada-aem653-s3-stage.adobecqms.net',
           //Employment Social Development Canada
            'cv19benefits-appservice-staging.azurewebsites.net' ,
            'cv19benefits-appservice-dev.azurewebsites.net' ,
            'woodpecker.eastus.cloudapp.azure.com' ,
            'lonewolf.eastus.cloudapp.azure.com' ,            
           //Statistics Canada
            'www.statcan.gc.ca',
            'www144.statcan.gc.ca',
            'www12.statcan.gc.ca',
            'www23.statcan.gc.ca',
            'www35.statcan.gc.ca',
            'geosuite.statcan.gc.ca',
            'www65.statcan.gc.ca',
            'www66.statcan.gc.ca',
            'www150.statcan.gc.ca',
            'www120.statcan.gc.ca',//Old Site Search
            'www5.statcan.gc.ca',
            'web2-test1.wcms.statcan.ca',
            'qa-p-es-ui01.stcpaz.statcan.gc.ca',
            'wwwqa.statcan.gc.ca',
            'stc-ndm-qa-pc2.statcan.gc.ca',
            '10.24.221.62',
            'information-energie.statcan.gc.ca',
            'information-energie.canada.ca',
            'energy-information.canada.ca',
            'census.gc.ca',
            'recensement.gc.ca',
            'geoprod.statcan.gc.ca',
            'portal.covid.cloud.statcan.ca',          
           //Public Services Procurement Canada 
            'buyandsell.gc.ca',
            'beta.buyandsell.gc.ca',
            'beta.achatsetventes.gc.ca',
            'content.buyandsell.gc.ca',
            'contenu.achatsetventes.gc.ca',
            'webdev02.tpsgc-pwgsc.gc.ca',
            'www.tpsgc-pwgsc.gc.ca',
            'staging.achatscanadabuys.ca',
            '52.139.3.203',
            'm8-test.achatscanadabuys.ca',
           //Global Affairs Canada
            'www.international.gc.ca',
            'w05.international.gc.ca',
           //Natural Resources Canada
            'www.nrcan.gc.ca',
            'www.rncan.gc.ca',
            'nrcan.gc.ca',
            'rncan.gc.ca',
            'www.esrfuns.org', 
            'esrfuns.org', 
            'www.fondsee.org', 
            'fondsee.org', 
            'www.apap.gc.ca', 
            'apap.gc.ca', 
            'www.paap.gc.ca', 
            'paap.gc.ca', 
            'www.npa.gc.ca', 
            'npa.gc.ca', 
            'www.apn.gc.ca', 
            'apn.gc.ca', 
            'www.mpmo.gc.ca', 
            'mpmo.gc.ca', 
            'www.bggp.gc.ca', 
            'bggp.gc.ca', 
           //Agriculture and Agri Food Canada
            'www.agr.gc.ca',
            'agr.gc.ca',
           //Canadian Food Inspection Agency
            'inspection.gc.ca',
            'www.inspection.gc.ca',
           //Public Safety
            'infomedia.gc.ca',
          //Correctional Investigator Canada
            '52.228.98.226',
            //Public Service Commission
            'intracom',
            'intradev',
            'extranet.psc-cfp.gc.ca',
            'devextranet.psc-cfp.gc.ca',
            //Library Archives Canada
            'dev-www.bac-lac.gc.ca',
           //Immigration, Refugees and Citizenship Canada
            '10.24.221.62:8080',
            'www.cic.gc.ca',
            'cic.gc.ca',
          //Public Services Procurement Canada
            'staging.achatscanadabuys.ca',
            'm8-dev-collab.achatscanadabuys.ca',
            '52.139.21.184',
          //Treasury Board of Canada Secretariat
            'staging.open.canada.ca',
            'search-staging.open.canada.ca',
          //Impact Assessment Agency
            'ceaa.qa.ncr.ec.gc.ca',
          //Canada Revenue Agency
            'performance.alpha.canada.ca',
            "apps1.ams-sga.cra-arc.gc.ca", 
            "apps2.ams-sga.cra-arc.gc.ca", 
            "apps3.ams-sga.cra-arc.gc.ca", 
            "apps4.ams-sga.cra-arc.gc.ca", 
            "apps5.ams-sga.cra-arc.gc.ca", 
            "apps6.ams-sga.cra-arc.gc.ca", 
            "apps7.ams-sga.cra-arc.gc.ca", 
            "apps8.ams-sga.cra-arc.gc.ca"
];

/*
			'10.24.221.62'
            ,'52.60.222.254' // Booking Tool Staging
            ,'iv.apps.canada.ca' // Booking Tool Prod
            ,'v.apps.canada.ca' // Booking Tool Prod
            ,'gcbooking.adobecqms.net' //Booking Tool
            ,'localhost'
            ,'universallabs.org' 
            ,'dev1.canada.ca'
            ,'dev3.canada.ca'
            ,'www1.canada.ca' 
            ,'canada.ca' 
            ,'www.canada.ca' 
            ,'staging65s3.canada.ca' // AEM 6.5
            ,'canada-aem651-s3-dev.adobecqms.net' // AEM 6.5
            ,'canada-aem651-s3-stage.adobecqms.net' // AEM 6.5
            ,'canada-aem652-s3-stage.adobecqms.net' // AEM 6.5
            ,'canada-aem653-s3-stage.adobecqms.net' // AEM 6.5
            ,'staging-recherche.gc.ca' // Search
            ,'recherche.gc.ca' 
            ,'recherche-search.gc.ca' 
            ,'search.gc.ca' 
            ,'search-recherche.gc.ca'
            ,'www.recherche.gc.ca' 
            ,'www.recherche-search.gc.ca' 
            ,'www.search.gc.ca' 
            ,'www.search-recherche.gc.ca' 
            ,'canada-service-corps.canada.ca' // PM Service Corps
            ,'service-jeunesse.canada.ca' 
      // Library and Archives
            ,'bac-lac.gc.ca'
            ,'lac-bac.gc.ca'
            ,'www.bac-lac.gc.ca'
            ,'www.lac-bac.gc.ca'
            ,'canadiana-qa.dev.bac-lac.gc.ca'
            ,'central.bac-lac.gc.ca'
            ,'central-d.dev.bac-lac.gc.ca'
            ,'webdev-srv.dev.bac-lac.gc.ca'
            ,'webqa-srv01.qa.bac-lac.gc.ca'
            ,'ucc-qa'
            ,'v41extweb01-d.services.bac-lac.gc.ca'
            ,'canadiana.bac-lac.gc.ca'
            ,'www.canadiana.bac-lac.gc.ca' 
            ,'cipbookentry.bac-lac.gc.ca' 
            ,'cipbookentry-qa.dev.bac-lac.gc.ca'
            ,'www.cipbookentry.bac-lac.gc.ca' 
            ,'co-lab.bac-lac.gc.ca' 
            ,'www.co-lab.bac-lac.gc.ca' 
            ,'sigles-symbols-qa.bac-lac.gc.ca'
            ,'sigles-symbols.bac-lac.gc.ca' 
            ,'www.sigles-symbols.bac-lac.gc.ca' 
            ,'event-qa'
            ,'event.bac-lac.gc.ca' 
            ,'www.event.bac-lac.gc.ca' 
            ,'nouvelle-france.org' 
            ,'www.collectionscanada.gc.ca'
            ,'cipbookentry-d.dev.bac-lac.gc.ca'
            ,'v41extcapps01-d.dev.bac-lac.gc.ca'
            ,'tdg-grt-d.dev.bac-lac.gc.ca'
            ,'event-d.dev.bac-lac.gc.ca'
            ,'canadiana-d.dev.bac-lac.gc.ca'
            ,'sigles-symbols-d.bac-lac.gc.ca'
            ,'dev-www.bac-lac.gc.ca'
            ,'financement-funding.bac-lac.gc.ca'
            ,'tdg-grt.bac-lac.gc.ca'
            ,'event.bac-lac.gc.ca'
            ,'sigles-symbols.bac-lac.gc.ca'
      // Impact Assessment Agency of Canada
            ,'acee.gc.ca' // Old domain (CEAA)      
            ,'acee-ceaa.gc.ca' 
            ,'www.acee.gc.ca' 
            ,'www.acee-ceaa.gc.ca' 
            ,'ceaa.dev.ec.gc.ca' 
            ,'ceaa.gc.ca' 
            ,'ceaa-acee.gc.ca' 
            ,'www.ceaa.gc.ca' 
            ,'www.ceaa-acee.gc.ca' 
            ,'ceaa.qa.ncr.ec.gc.ca'
            ,'www.iaac-acei.gc.ca' // New domain (IAAC)
            ,'iaac-acei.gc.ca'
            ,'www.acei-iaac.gc.ca'
            ,'acei-iaac.gc.ca'
            ,'www.iaac.gc.ca'
            ,'iaac.gc.ca'
            ,'www.acei.gc.ca'
            ,'acei.gc.ca'
            ,'www.iaac-aeic.gc.ca'
            ,'iaac-aeic.gc.ca'
            ,'www.aeic-iaac.gc.ca'
            ,'aeic-iaac.gc.ca'
            ,'www.aeic.gc.ca'
            ,'aeic.gc.ca'
    // Agriculture and Agri-Food Canada
            ,'www.agr.gc.ca' 
            ,'agr.gc.ca' 
            ,'www-dev.agr.gc.ca' 
            ,'intranet.agr.gc.ca'
            ,'www-tst.agr.gc.ca'
            ,'canadabrandgocaccess.agr.gc.ca'
            ,'canadabrandgocaccess.agr.gc.ca'      
            ,'www.canadabrand.agr.gc.ca'      
            ,'canadabrand.agr.gc.ca'      
            ,'brandcanada.agr.gc.ca'      
            ,'www.brandcanada.agr.gc.ca'      
            ,'marquecanadabrand.agr.gc.ca'      
            ,'www.marquecanadabrand.agr.gc.ca'
    // Treasury Board Secretariat      
            ,'atip-aiprp.tbs-sct.gc.ca' 
            ,'uat.atip-aiprp.tbs-sct.gc.ca' 
            ,'pre-prod.atip-aiprp.tbs-sct.gc.ca' 
            ,'authoring.publiservice.tbs-sct.gc.ca' 
            ,'authoring.www.tbs-sct.gc.ca'
            ,'staging.open.canada.ca'
            ,'search-staging.open.canada.ca'
            ,'open.canada.ca'
            ,'search.open.canada.ca'
            ,'staging.atip-aiprp.tbs-sct.gc.ca'
            ,'uat1.atip-aiprp.tbs-sct.gc.ca'
    // Statistics Canada
            ,'www.statcan.gc.ca'
            ,'www5.statcan.gc.ca'
            ,'www12.statcan.gc.ca'
            ,'www23.statcan.gc.ca'
            ,'www35.statcan.gc.ca'
            ,'www65.statcan.gc.ca'
            ,'www66.statcan.gc.ca'
            ,'www76.statcan.gc.ca'
            ,'www120.statcan.gc.ca'
            ,'www144.statcan.gc.ca'
            ,'www150.statcan.gc.ca'
            ,'information-energie.canada.ca'
            ,'information-energie.statcan.gc.ca'
            ,'energy-information.canada.ca'
            ,'census.gc.ca'
            ,'recensement.gc.ca'
            ,'geosuite.statcan.gc.ca'
            ,'geoprod.statcan.gc.ca'
            ,'wpaz-ofm12c-ssl-i.services.gc.qat'
            ,'www5testb.statcan.gc.ca'
            ,'srv113-i.lab.hrdc-drhc.gc.ca'
            ,'src-dev13.wcms.statcan.ca'
            ,'codweb1.stcpaz.statcan.gc.ca'
            ,'codweb2.stcpaz.statcan.gc.ca'
            ,'stc-ndm-qa-pc2.statcan.gc.ca'
            ,'stc-ndm-qa-pc2.statcan.gc.ca'
            ,'prod-p-es-fusion01.stcpaz.statcan.gc.ca'
            ,'census-qa.statcan.gc.ca'
            ,'recensement-qa.statcan.gc.ca'
            ,'qa-p-es-ui01.stcpaz.statcan.gc.ca'
            ,'dv-vd-sprint1.test.cloud.statcan.ca'
            ,'www.dv-vd-sprint1.test.cloud.statcan.ca'
            ,'wwwqa.statcan.gc.ca'
            ,'www76qa.statcan.gc.ca'
            ,'geodepot.statcan.gc.ca'
            ,'geodepot.statcan.ca'
            ,'portal.covid.cloud.statcan.ca'          
            ,'analytics-platform.statcan.gc.ca'   
            ,'oc-dev.covid.cloud.statcan.ca'   
            ,'web2-test1.wcms.statcan.ca'
            ,'10.24.221.62'
             ,'daaas-dev.covid.cloud.statcan.ca'
            ,'oc-dev.covid.cloud.statcan.ca'
      // Employment Social Developmet Canada
            ,'disclosure.esdc.gc.ca' 
            ,'disclosure.servicecanada.gc.ca' 
            ,'www.canadabenefits.gc.ca' 
            ,'www.canadabenefits.gc.ca' 
            ,'wpaz-ofm12c-ssl-i.services.gc.qat' 
            ,'wpaz-ofm-i.sade-edap.prv' 
            ,'wpaz-ofm-i-e-esdc.services.gc.qat' 
            ,'prestationsducanada.gc.ca' 
            ,'www.prestationsducanada.gc.ca' 
            ,'negotech.labour.gc.ca'
            ,'negotheque.travail.gc.ca'
            ,'mlapesd3963v-s2tst-negotech.intra.dev'
            ,'cv19benefits-appservice-staging.azurewebsites.net'
            ,'cv19benefits-appservice-dev.azurewebsites.net'
            ,'covid-benefits.alpha.canada.ca'
            ,'covid-prestations.alpha.canada.ca'
            ,'woodpecker.eastus.cloudapp.azure.com'
            ,'10.71.64.91'
        //,'10.71.66.120'      
            ,'multi-benefits.servicecanada.gc.ca' //CERB DFO
            ,'multi-benefices.servicecanada.gc.ca' //CERB DFO
            ,'pesdc.prv'
      // Elections CRA
            ,'ec9wbstepfpkedu' 
            ,'elections.ca' 
            ,'www.elections.ca' 
            ,'enr.elections.ca' 
            ,'www.test.elections.ca' 
            ,'enr.test.elections.ca'
            ,'ereg.elections.ca' 
            ,'www.ereg.elections.ca' 
            ,'ispdevwww.elections.ca' 
            ,'secure.elections.ca' 
            ,'secure.test.elections.ca' 
            ,'rspispweb01-ste-demo1.elections.ca'
            ,'ereg.test.elections.ca'
            ,'ereg.elections.ca'
            ,'www.ereg.elections.ca'
            ,'ecdev_maint-pesc.ecade.elections.ca'
            ,'www.ecdev_maint-pesc.ecade.elections.ca'
            ,'cef-cce.ca'
            ,'www.cef-cce.ca'
      // Natural Resources Canada
            ,'equalby30.org' 
            ,'www.equalby30.org' 
            ,'nrcan.gc.ca' 
            ,'www.nrcan.gc.ca' 
            ,'rncan.gc.ca' 
            ,'www.rncan.gc.ca' 
            ,'rncanengagenrcan.ca' 
            ,'www.rncanengagenrcan.ca' 
            ,'www.rncanengagenrcan.ca' 
            ,'test.nrcan.gc.ca' 
            ,'test.rncan.gc.ca' 
            ,'www.test.nrcan.gc.ca' 
            ,'www.test.rncan.gc.ca' 
            ,'minescanada.ca'
            ,'www.minescanada.ca'
            ,'globe-cem-mi.yourballistic.com'
            ,'esrfunds.org'
            ,'www.esrfunds.org'
            ,'www.fondsee.org'
            ,'fondsee.org'      
            ,'www.npa.gc.ca'      
            ,'npa.gc.ca'      
            ,'www.apn.gc.ca'      
            ,'www.mpmo.gc.ca'      
            ,'www.bggp.gc.ca'      
            ,'www.apap.gc.ca'      
            ,'www.paap.gc.ca'
            ,'cem-mi-vancouver2019.ca'
            ,'www.cem-mi-vancouver2019.ca'
            ,'cmep-mi-vancouver2019.ca'
            ,'apap.gc.ca'
            ,'paap.gc.ca'
            ,'www.esrfunds.org'
            ,'www.fondsee.org'
            ,'mpmo.gc.ca'
            ,'bggp.gc.ca'
            ,'npa.gc.ca'
            ,'apn.gc.ca'
            ,'natural-resources.canada.ca' //new canada.ca subdomainsdomain
            ,'ressources-naturelles.canada.ca' //new canada.ca subdomain
            ,'nrcan.canada.ca' //new canada.ca subdomain
            ,'rncan.canada.ca' //new canada.ca subdomain
            ,'nrcan-rncan.canada.ca' //new canada.ca subdomain
            ,'rncan-nrcan.canada.ca' //new canada.ca subdomain
            ,'osdp-cumulative-effects-stage.canada.ca'
            ,'psdo-effets-cumulatifs-stage.canada.ca'
            ,'qa.dev.osdp.aws.nrcan-rncan.cloud'
            ,'osdp-cumulative-effects.canada.ca'
            ,'psdo-effets-cumulatifs.canada.ca'
            ,'www.dev.nrcan.gc.ca'
            ,'dev.nrcan.gc.ca'
            ,'www.dev.rncan.gc.ca'
            ,'dev.rncan.gc.ca' 
            ,'dev.npa.gc.ca'
            ,'dev.esrfunds.org'
            ,'dev.mpmo.gc.ca'
            ,'dev.apn.gc.ca'
            ,'dev.fondsee.org'
            ,'dev.bggp.gc.ca'
        ,'dev.rncanengagenrcan.ca' 
        ,'dev.minescanada.ca'
        ,'dev.equalby30.org' 
      // Office of the procurement ombudsman
            ,'opo-boa.gc.ca' 
            ,'dev.boa-opo.gc.ca' 
            ,'xterra3w2k16.ncr.pwgsc.gc.ca'
            ,'secure.opo-boa.gc.ca'
      // MSCA-MEIIO
            ,'srv113-i.lab.hrdc-drhc.gc.ca' 
            ,'srv113-u.lab.hrdc-drhc.gc.ca' 
            ,'srv136.services.gc.ca' 
            ,'srv2140-u.services.gc.qat' 
            ,'srv241-s2.lab.hrdc-drhc.gc.ca' 
      // Transport Canada
            ,'transport-dev' 
      // Health Canada
            ,'a8047055' 
            ,'cfgtest.canadacentral.cloudapp.azure.com' //food guide
            ,'vmportaltest.canadacentral.cloudapp.azure.com'
            ,'prcitestfr.canadacentral.cloudapp.azure.com'
            ,'food-guide.canada.ca'
            ,'www.food-guide.canada.ca'
            ,'www.guide-alimentaire.canada.ca'
            ,'guide-alimentaire.canada.ca'
            ,'clinical-information.canada.ca'
            ,'renseignements-cliniques.canada.ca'
            ,'cfg-qa.hres.ca'
            ,'cfg-stage.hres.ca'
            ,'food-guide-stage.hpfb-dgpsa.ca'
      // Immigration Refugee Canada
            ,'www.cic.gc.ca'
            ,'cic.gc.ca'
            ,'eservices1.ci.gc.ca'
            ,'gol-ecas-dev.ci.gc.ca'
            ,'www-dev.ic.gc.ca'
            ,'eservices.cic.gc.ca'
            ,'services3.cic.gc.ca'
      // Canada Revenue Agency
            ,'cra-arc.gc.ca'
            ,'arc-cra.gc.ca'
            ,'cra.gc.ca'
            ,'arc.gc.ca'
            ,'www.cra-arc.gc.ca'
            ,'www.arc-cra.gc.ca'
            ,'www.cra.gc.ca'
            ,'www.arc.gc.ca'
            ,'apps.cra-arc.gc.ca'
            //CRA UT
            ,'cp-ut.isvcs.net'
            ,'rp-ut.isvcs.net'
            ,'cp-ut2.isvcs.net'
            ,'rp-ut2.isvcs.net'
            //CRA SI
            ,'ams-sga-si.cra-arc.gc.ca'
            ,'cms-sgj-si.cra-arc.gc.ca'
            ,'ams-sga-si2.cra-arc.gc.ca'
            ,'cms-sgj-si2.cra-arc.gc.ca'
            //CRA UA
            ,'ams-sga-ua.cra-arc.gc.ca'
            ,'cms-sgj-ua.cra-arc.gc.ca'
            ,'ams-sga-ua2.cra-arc.gc.ca'
            ,'cms-sgj-ua2.cra-arc.gc.ca'
            //CRA OT      
            ,'apps1.ams-sga-ot.cra-arc.gc.ca'
            ,'apps2.ams-sga-ot.cra-arc.gc.ca'
            ,'apps3.ams-sga-ot.cra-arc.gc.ca'
            ,'apps4.ams-sga-ot.cra-arc.gc.ca'
            ,'apps5.ams-sga-ot.cra-arc.gc.ca'
            ,'apps6.ams-sga-ot.cra-arc.gc.ca'
            ,'apps7.ams-sga-ot.cra-arc.gc.ca'
            ,'apps8.ams-sga-ot.cra-arc.gc.ca'
            ,'cms-sgj-ot.cra-arc.gc.ca'
            ,'apps1.ams-sga-ot2.cra-arc.gc.ca'
            ,'apps2.ams-sga-ot2.cra-arc.gc.ca'
            ,'apps3.ams-sga-ot2.cra-arc.gc.ca'
            ,'apps4.ams-sga-ot2.cra-arc.gc.ca'
            ,'apps5.ams-sga-ot2.cra-arc.gc.ca'
            ,'apps6.ams-sga-ot2.cra-arc.gc.ca'
            ,'apps7.ams-sga-ot2.cra-arc.gc.ca'
            ,'apps8.ams-sga-ot2.cra-arc.gc.ca'
            ,'cms-sgj-ot2.cra-arc.gc.ca'
            ,'ams-sga.cra-arc.gc.ca'
            ,'cms-sgj.cra-arc.gc.ca'
            ,'apps1.ams-sga.cra-arc.gc.ca'
            ,'apps2.ams-sga.cra-arc.gc.ca'
            ,'apps3.ams-sga.cra-arc.gc.ca'
            ,'apps4.ams-sga.cra-arc.gc.ca'
            ,'apps5.ams-sga.cra-arc.gc.ca'
            ,'apps6.ams-sga.cra-arc.gc.ca'
            ,'apps7.ams-sga.cra-arc.gc.ca'
            ,'apps8.ams-sga.cra-arc.gc.ca'
            ,'www.ams-sga.cra-arc.gc.ca'
            ,'www.cms-sgj.cra-arc.gc.ca'
            ,'www.apps1.ams-sga.cra-arc.gc.ca'
            ,'www.apps2.ams-sga.cra-arc.gc.ca'
            ,'www.apps3.ams-sga.cra-arc.gc.ca'
            ,'www.apps4.ams-sga.cra-arc.gc.ca'
            ,'www.apps5.ams-sga.cra-arc.gc.ca'
            ,'www.apps6.ams-sga.cra-arc.gc.ca'
            ,'www.apps7.ams-sga.cra-arc.gc.ca'
            ,'www.apps8.ams-sga.cra-arc.gc.ca'
            ,'apps-ut.cra-arc.gc.ca'
            ,'apps-ua.cra-arc.gc.ca' 
            ,'apps-ut.isvcs.net'
            ,'apps-ua.isvcs.net'
            ,'apps-ut2.cra-arc.gc.ca'
            ,'apps-ua2.cra-arc.gc.ca'
            ,'apps-ut2.isvcs.net'
            ,'apps-ua2.isvcs.net'
        ,'performance.alpha.canada.ca'
   // Public Services procurement Canada
            ,'test.publications.gc.ca'
            ,'publications.gc.ca'
            ,'www.publications.gc.ca'
            ,'content.buyandsell.gc.ca'
            ,'beta.buyandsell.gc.ca'
            ,'beta.achatsetventes.gc.ca'
            ,'webdev02.tpsgc-pwgsc.gc.ca'
            ,'www.tpsgc-pwgsc.gc.ca'
            ,'buyandsell.gc.ca'
            ,'achatsetventes.gc.ca'
            ,'staging.achatscanadabuys.ca'
            ,'52.139.21.184'
            ,'52.139.3.203'
            ,'m8-test.achatscanadabuys.ca'
            ,'52.139.3.203'
            ,'m8-test.achatscanadabuys.ca'
            ,'m8-dev-collab.achatscanadabuys.ca'
      // Global Affiars Canada
            ,'www.international.gc.ca'
            ,'international.gc.ca'
            ,'www.tradecommissioner.gc.ca'
            ,'www.deleguescommerciaux.gc.ca'
            ,'travel-ace-m2'
            ,'voyage-ace-m2' 
            ,'travel.gc.ca'
            ,'voyage.gc.ca' 
            ,'core-ombuds.canada.ca'
            ,'deleguescommerciaux.gc.ca'
            ,'www.educanada.ca'
    // Justice
            ,'www-uat.justice.gc.ca'
            ,'limsdev.justice.gc.ca'
            ,'dmteam-uat.justice.gc.ca'
            ,'equipesm-uat.justice.gc.ca'
            ,'www-uat.victimsfirst.gc.ca'
            ,'www-uat.victimesdabord.gc.ca'
            ,'jusnet-uat.justice.gc.ca'
            ,'www-uat.victimsweek.gc.ca'
            ,'www-uat.semainedesvictimes.gc.ca'
            ,'www.justice.gc.ca'
            ,'justice.gc.ca'
            ,'dmteam.justice.gc.ca'
            ,'equipesm.justice.gc.ca'
            ,'www.laws-lois.justice.gc.ca'
            ,'laws-lois.justice.gc.ca'
            ,'lois-laws.justice.gc.ca'
            ,'www.lois-laws.justice.gc.ca'
            ,'www.ppsc.gc.ca'
            ,'ppsc.gc.ca'
            ,'www.victimsweek.gc.ca'
            ,'www.semainedesvictimes.gc.ca'
            ,'victimsweek.gc.ca'
            ,'semainedesvictimes.gc.ca'
            ,'jusnet.justice.gc.ca'
      // Canadian Food Inspection Agency
            ,'inspection.gc.ca'
            ,'www.inspection.gc.ca'
            ,'inspection.canada.ca'
            ,'www.inspection.canada.ca'
            ,'active.inspection.gc.ca'
            ,'www.active.inspection.gc.ca'
            ,'merlin.cfia-acia.inspection.gc.ca'
            ,'apps.merlin.cfia-acia.inspection.gc.ca'
            ,'www.apps.merlin.cfia-acia.inspection.gc.ca'
      // Public Safety Canada
            ,'infomediadev'
            ,'infomedia.gc.ca'
            ,'www.infomedia.gc.ca'
            ,'beta.infomedia.gc.ca'
            ,'api.infomedia.gc.ca'
            ,'icdev'
            ,'psdev'
            ,'gpdev'
            ,'10.10.20.150'
            ,'10.10.20.154'
            ,'10.13.17.54'
            ,'psdev'
            ,'gpdev'
            ,'ecdev'
            ,'icdev'
            ,'publicsafety.gc.ca'
            ,'www.publicsafety.gc.ca'
            ,'securitepublique.gc.ca'
            ,'www.securitepublique.gc.ca'
            ,'getprepared.gc.ca'
            ,'www.getprepared.gc.ca'
            ,'preparez-vous.gc.ca'
            ,'www.preparez-vous.gc.ca'
            ,'erc-cee.gc.ca'
            ,'www.erc-cee.gc.ca'
            ,'infocentral'
            ,'infocentrale'
            ,'infocentral'
      // RCMP External Review Committee
            ,'ercdev'
            ,'10.10.20.151'
      // Open Government
            ,'staging.open.canada.ca'
            ,'stadification.ouvert.canada.ca'
            ,'open.canada.ca'
            ,'ouvert.canada.ca'
            ,'search.open.canada.ca'
            ,'rechercher.ouvert.canada.ca'
      // Correctional Investigator Canada
            ,'52.228.98.226'
            ,'www.oci-bec.gc.ca'
            ,'oci-bec.gc.ca'
      //Public Service Commission
            ,'intracom'
            ,'intradev'
            ,'intracom.psc-cfp.gc.ca'
            ,'extranet.psc-cfp.gc.ca'
            ,'devextranet.psc-cfp.gc.ca'
            ,'test-psjobs-emploisfp.psc-cfp.gc.ca'
            ,'emploisfp-psjobs.cfp-psc.gc.ca'
      //Superintendent of Financial Institutions Canada (Office of the)
            ,'devirppub.devosfi.ca'
            ,'uatirppub.devosfi.ca'
      //Women and Gender Equality Canada      
            ,'canada/testing/page1-fr.html'      
            ,'canada/testing/page1-en.html'      
            ,'intranettest'      
      //Canadian Space Agency
            ,'devcorpo'

]
*/