import $ from '../core';

$.prototype.modal = function (created) {
    for (let i = 0; i < this.length; i++){
        let scroll = calcScroll();
        const target = this[i].getAttribute('data-target');
        $(this[i]).click((e) => {
            e.preventDefault();
            $(target).fadeIn(500);
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scroll}px`;
        });

        const closeElemets = document.querySelectorAll(`${target} [data-close]`);
        closeElemets.forEach(elem => {
            $(elem).click(() => {
                $(target).fadeOut(500);
                document.body.style.overflow = '';
                document.body.style.marginRight = `0px`;
                if (created){
                    document.querySelector(target).remove();
                }
            });
        });

        $(target).click(e => {
            if (e.target.classList.contains('modal')){
                $(target).fadeOut(500);
                document.body.style.overflow = '';
                document.body.style.marginRight = `0px`;
                if (created){
                    document.querySelector(target).remove();
                }
            }
        
        });
    }    
};


function calcScroll(){
    let div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);

    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
}
$('[data-toggle="modal"]').modal();

$.prototype.createModal = function ({textTitle, textBody, btnCount, btnSetting} = {}) {
    for (let i = 0; i < this.length; i++){
        let modal = document.createElement('div');
        $(modal).addClass('modal');        
        $(modal).addAtribute('id', this[i].getAttribute('data-target').slice(1));

        const buttons = [];
        for (let j = 0; j < btnCount; j++){
            let btn = document.createElement('button');
            $(btn).addClass('btn', ...btnSetting[j][1]);
            btn.textContent = btnSetting[j][0];
            if(btnSetting[j][2]){
                btn.setAttribute('data-close', true);
            }
            if(btnSetting[j][3] && typeof(btnSetting[j][3]) === 'function'){
                $(btn).click(btnSetting[j][3]);
            }
            buttons.push(btn);
        }

        $(modal).html( 
            `
            <div class="modal-dialog">
                <div class="modal-content">
                    <button class="close" data-close>
                        <span>&times;</span>
                    </button>
                    <div class="modal-header">
                        <div class="modal-title">
                            ${textTitle}
                        </div>
                    </div>
                    <div class="modal-body">
                        ${textBody}
                    </div>
                    <div class="modal-footer">
                        
                    </div>
                </div>
             </div>
        `
        );

        
        modal.querySelector(".modal-footer").append(...buttons);
        document.body.appendChild(modal);
        $(this[i]).modal(true);
        $(this[i].getAttribute('data-target')).fadeIn(500);
    }
};