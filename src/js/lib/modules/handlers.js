import $ from '../core';

$.prototype.on =  function (eventName, callBack){
    for (let i = 0; i < this.length; i++){
        if (!this[i].addEventListener){
            continue;
        }
        if(!eventName || !callBack){
            return this;
        }
        this[i].addEventListener(eventName, callBack);
    }
    return this;
};

$.prototype.off = function (eventName, callBack){
    for (let i = 0; i < this.length; i++){
        if (!this[i].addEventListener){
            continue;
        }
        if(!eventName || !callBack){
            return this;
        }
        this[i].removeEventListener(eventName, callBack);
    }
    return this;
};

$.prototype.click = function (handler){
    for (let i = 0; i < this.length; i++){
        if (!this[i].addEventListener){
            continue;
        }
        if (handler){
            this[i].addEventListener('click', handler);
        } else{
            this[i].click();
        }
        
    }    
    return this;    
};

// атрибуты 
$.prototype.addAtribute = function (name, value) {
    for (let i = 0; i < this.length; i++) {
        this[i].setAttribute(name, value);
    }
    return this;
};
$.prototype.setAttr = function (nameAtribute) {
    for (let i = 0; i < this.length; i++) {
        this[i].getAttribute(nameAtribute);
    }
 
    return this;
};
 
$.prototype.removeAtribute = function (nameAtribute) {
    for (let i = 0; i < this.length; i++) {
        this[i].removeAttribute(nameAtribute);
    }
 
    return this;
};

$.prototype.toggleAtribute = function (nameAtribute, value){
    for (let i = 0; i < this.length; i++) {
        if (this[i].hasAttribute(nameAtribute)){
            this[i].removeAttribute(nameAtribute);
        } else {
            this[i].setAttribute(nameAtribute, value);
        }
    }
    return this;
};
