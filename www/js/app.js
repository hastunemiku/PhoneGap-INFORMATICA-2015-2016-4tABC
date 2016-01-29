window.addEventListener('load', function() {

     $JSView.declareMenu({
        
        viewMenuA: {
            url: '/viewMenuA',
            template: 'views/viewMenuA.html',
            controller: 'viewMenuA'
        },
        
    	viewMenuB: function(e){
        $JSView.dataView({'title': 'Templates'},e)
    	},
    
    	viewMenuC: function(e){
        $JSView.dataView({'title': 'Examples initLoadMore'},e)
	},
    
    	viewMenuD: function(e){
        $JSView.dataView({'title': 'Examples initReload'},e)
    	}
    });
    
    
    
    /*	
			Declare views
	
			Aquí podem afegir diferents pàgines html , indicar on estan i el nom del controller ( mirar controller.js )
	
    */
    $JSView.declareView({ 
        inici: {
            url: '/inici',
            template: 'views/inici.html',
            controller: 'inici'
        },
        diumenge: {
            url: '/diumenge',
            template: 'views/diumenge.html',
            controller: 'diumenge'
        },
        dilluns: {
            url: '/dilluns',
            template: 'views/dilluns.html',
            controller: 'dilluns'
        },
        dimarts: {
            url: '/dimarts',
            template: 'views/dimarts.html',
            controller: 'dimarts'
        },
        dimecres: {
            url: '/dimecres',
            template: 'views/dimecres.html',
            controller: 'dimecres'
        },
        dijous: {
            url: '/dijous',
            template: 'views/dijous.html',
            controller: 'dijous'
        },
        divendres: {
            url: '/divendres',
            template: 'views/divendres.html',
            controller: 'divendres'
        }
    });
     
    /*Declare modal*/
    $JSView.declareModal({
        modalA: {
            url: '/modalA',
            template: 'views/modalA.html',
            controller: 'modalA'
        }
    });
     
    /*Asign view start*/
    $JSView
        .initView('inici');
 
 modal_info_aeroport: {

url: '/modal_info_aeroport',

template: 'views/modal_info_aeroport.html',

controller: 'modal_info_aeroport'

}
 /*Declare modal*/

$JSView.declareModal({

 modal_info_aeroport: {

url: '/modal_info_aeroport',

template: 'views/modal_info_aeroport.html',

controller: 'modal_info_aeroport'

}


});
 
}, false);
