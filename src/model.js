class Model{
    constructor({
        content,
        title,
        skin,
        btn,
        opacity,
        yes,
        no
    }) {
        this.content = content || ''
        this.title = title || '信息'
        this.skin = skin || ''
        this.btn = btn || '确定'
        this.opacity = opacity || '0.3'
        this.yes = yes || function () {}
        this.no = no || function () {}
        this.view()
    }

    view() {
        const that = this
        const modelMask = `<div class="model-mask"></div>`        
        const modelBox = document.createElement('div')
        const modelBtnBox = document.createElement('div')
        const frag = document.createDocumentFragment()
        modelBox.className = "model"
        modelBox.innerHTML = `
            <div class="model-title">${that.title}</div>
            <div class="model-content ${that.skin}">${that.content}</div>
            <span class="model-close">×</span>
        `
        modelBtnBox.className = "model-btns"
        if (Object.prototype.toString.call(that.btns) === '[object Array]') {
            modelBtnBox.appendChild(that.btns.map((item, i) => `<a class = "model-btn${i}">${item}</a>`))
        } else {
            modelBtnBox.appendChild(`<a class = "model-btn0">${that.btns}</a>`)
        }
        modelBox.appendChild(modelBtnBox)
        frag.appendChild(modelMask)
        frag.appendChild(modelBox)
        document.body.appendChild(frag)
        
    }

    open(options) {
        return new Model(options)
    }

    alert() {

    }

    confirm() {

    }
}


export default Model