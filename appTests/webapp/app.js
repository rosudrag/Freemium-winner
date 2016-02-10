'use strict';

describe('Routing testing',function(){
    var $rootScope,$state,$templateCache,$location;

    beforeEach(function(){
        module('freemium');
        inject(function(_$rootScope_,_$state_,_$templateCache_,_$location_){
            $rootScope = _$rootScope_;
            $state = _$state_;
            $templateCache = _$templateCache_;
            $location = _$location_;
        });
    });

    describe("Path testing home cases",function(){
        beforeEach(function(){
            mockTemplate('template/main.html');
        });
        it('Should be on home given empty path',function(){
            goTo('');
            expect($state.current.name).toEqual('home');
        });
        it('Should be on home given "/"',function(){
            goTo('/');
            expect($state.current.name).toEqual('home');
        });
        it('Should be on home given "home"',function(){
            goTo('home');
            expect($state.current.name).toEqual('home');
        });
    });

    describe("Path testing otherwise cases",function(){
        beforeEach(function(){
            mockTemplate('template/404.html');
        });
        it('Should be go to 404 state',function(){
            goTo('bullshitURL');
            expect($state.current.name).toEqual('404');
        });
        it('Should not change URL',function(){
            var badUrl = '/bullshitURL';
            goTo(badUrl);
            expect($location.url()).toEqual(badUrl);
        });
    });

    function goTo(url) {
        $location.url(url);
        $rootScope.$digest();
    }

    function mockTemplate(templateRoute, tmpl) {
        $templateCache.put(templateRoute, tmpl || templateRoute);
    }

    function goFrom(url) {
        return {
            toState: function (state, params) {
                //Don't actually trigger a reload
                $location.replace().url(url);
                $state.go(state, params);
                $rootScope.$digest();
            }
        };
    }
});
