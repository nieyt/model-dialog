class Modal{
    constructor({
        content,
        title,
        width,
        height,
        maxWidth,
        maxHeight,
        skin,
        btn,
        opacity,
        yes,
        no,
        always
    } = {}) {
        this.index = modal.index++;
        this.content = content || '';
        this.title = title || '信息';
        this.skin = skin || '';
        this.btn = btn || '确定';
        this.opacity = opacity || '';
        this.yes = yes || function () {};
        this.no = no || function () {};
        this.always = always || function() {};
        this.style = '';
        if (width) this.style += `width: ${width};`;
        if (height) this.style += `height: ${height};`;
        if (maxWidth) this.style += `max-width: ${maxWidth};`;
        if (maxHeight) this.style += `max-height: ${maxHeight};`;
        this.view();
    }

    view() {
        const that = this;
        const modalMask = document.createElement('div');  
        const modalBox = document.createElement('div');
        const modalBtnBox = document.createElement('div');
        that.frag = document.createDocumentFragment();
        modalMask.className = "modal-mask";
        modalMask.id = `modal-mask${this.index}`;
        modalBox.className = "modal";
        modalBox.id = `modal${this.index}`;
        modalBox.innerHTML = `
            <div class="modal-title">${that.title}</div>
            <div class="modal-content ${that.skin}">${that.content}</div>
            <span class="modal-close">×</span>
        `;
        that.opacity && (modalMask.style = `opacity: ${that.opacity};`);
        that.style && (modalBox.style = that.style);
        modalBtnBox.className = "modal-btns";
        if (Object.prototype.toString.call(that.btn) === '[object Array]') {
            modalBtnBox.innerHTML = that.btn.map((item, i) => `<a class = "modal-btn${i}">${item}</a>`).join('');
        } else {
            modalBtnBox.innerHTML = `<a class = "modal-btn0">${that.btn}</a>`;
        }
        modalBox.appendChild(modalBtnBox);
        that.frag.appendChild(modalMask);
        that.frag.appendChild(modalBox);
        document.body.appendChild(that.frag);
        that.bindEvent(modalBox, modalMask);
    }

    bindEvent(modalBox, mask) {
        const that = this;
        const btnNodes =  Array.prototype.slice.call(modalBox.getElementsByTagName('a'));
        modalBox.addEventListener('click',function(e) {
            const target = e.target;
            if(target && target.nodeName.toUpperCase() === "A"){
                that.close();
                btnNodes.indexOf(target) === 0 && that.yes();
                btnNodes.indexOf(target) === 1 && that.no();
            } else if (target && target.nodeName.toUpperCase() === "SPAN") {
                that.close();
            }
        });
    }

    close() {
        this.always();
        document.body.removeChild(document.getElementById(`modal-mask${this.index}`));
        document.body.removeChild(document.getElementById(`modal${this.index}`));
    }
}

const modal = {
    index: window.modal ? 10000: 0,
    open: function (configs) { new Modal(configs); },
    alert: function (content, options = {}) {
        this.open({
            content,
            ...options
        });
    },
    confirm: function (content, options = {}) { 
        this.open({
            content,
            btn: ['确定', '取消'],
            ...options
        });
    }
};

export default modal;
