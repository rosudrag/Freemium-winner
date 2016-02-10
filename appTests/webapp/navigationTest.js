describe('Unit testing navigation',function(){
    var $compile,$rootScope,template,element;

    beforeEach(module('freemium','fuck'));

    beforeEach(inject(function(_$compile_,_$rootScope_,$templateCache){
        template = $templateCache.get('templates/view/nav-bar.html');
        $templateCache.put('/template/nav-bar.html',template);
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        element = $compile("<navigation></navigation>")($rootScope);
        $rootScope.$digest();
    }));

    it('Should not be empty',function(){
        expect(element.html().not.toEqual(''));
    });
    it('Should have two div',function(){
        expect(element.find('div').length).toEqual(2);
    });

    it('Should contain header text',function(){
        expect(element.html()).toContain("Freemium Winner");
    })
});