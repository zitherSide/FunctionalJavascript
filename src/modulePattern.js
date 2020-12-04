var MyModule = (function MyModulue(exported){
    let _myPrivateVar = "";

    exported.method1 = function(){
        return {}
    }

    exported.method2 = function(){
        return {}
    }

    return exported
}(MyModule || {}))