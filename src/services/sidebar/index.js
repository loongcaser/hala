import axios from 'axios';
import Vue from 'vue';
import Sidebar from './sidebar.vue';

let _sidebars = {};

class GsSidebar {
    fromTemplateUrl(url, options) {
        return new Promise((resolve, reject) => {
            axios.get(url)
            .then((response) => {
                return response.data
            })
            .then((template) => {
                resolve(this.fromTemplate(template, options))
            })
        })
    }
    
    fromTemplate(template, options) {
        return this._init(template, options)
    }
    
    _init(template, options) {
    let refId = (options && options.refId) ? options.refId : Math.random().toString(36).substr(3, 6);
    let position = (options && options.position) ? options.position : 'left';
    let wrapper = document.createElement('div');
    wrapper.setAttribute('ha-sidebar-container', '');
    wrapper.setAttribute('ha-sidebar-container-' + refId, '');
    document.querySelector('[gs-app]').appendChild(wrapper);
    wrapper.innerHTML = `<sidebar position='${position}' ref='${refId}'>${template}</sidebar>`;
    
    let vm = new Vue({
        components: {
            Sidebar
        },
        el: `[ha-sidebar-container-${refId}]`
    });
    _sidebars[refId] = vm.$refs[refId];
    
    vm.$refs[refId].setWrapperSelector(`[ha-sidebar-container-${refId}]`);
    
    return vm.$refs[refId]
    }
    
    delegate(refId) {
        return _sidebars[refId]
    }
    
    destroy() {
        for (let refId in _sidebars) {
            if (_sidebars[refId]) {
                _sidebars[refId].$destroy();
                _sidebars[refId] = undefined
            }
        
            let wrapper = document.querySelector(`[ha-sidebar-container-${refId}]`);
            wrapper.innerHTML = '';
            document.querySelector('[gs-app]').removeChild(wrapper)
        }
        _sidebars = {}
    }
}

window.$sidebar = new GsSidebar();
