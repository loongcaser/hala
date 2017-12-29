import Vue from 'vue';
import Header from './header';
import Footer from './footer';
import Menu from './menu';
//import { Card, CardItem } from './card';
import Input from './input';
import Radio from './radio';
import Scroll from './scroll';
import {Swiper, SwiperItem} from './swiper';
import Datepicker from './datepicker';
import Accordion from './accordion';
import MdButton from './mdButton';
import GoTop from './goTop';
import Cascade from './cascade';
import Scalable from './scalable';

//引入svg
//import '../svg';

Vue.component(Header.name, Header);
Vue.component(Menu.name, Menu);
/*Vue.component(Card.name, Card);
Vue.component(CardItem.name, CardItem);*/
Vue.component(Input.name, Input);
Vue.component(Radio.name, Radio);
Vue.component(Scroll.name, Scroll);
Vue.component(Datepicker.name, Datepicker);
Vue.component(MdButton.name, MdButton);
Vue.component(GoTop.name, GoTop);
Vue.component(Cascade.name, Cascade);
Vue.component(Scalable.name, Scalable);

for (let key in Footer) {
    let component = Footer[key];
    Vue.component(component.name, component);
}

for (let key in Accordion) {
    let component = Accordion[key];
    Vue.component(component.name, component);
}

export default {
    Header,
    ...Footer,
    Menu,
    /*Card,
    CardItem,*/
    Input,
    Radio,
    Scroll,
    Swiper,
    SwiperItem,
    Datepicker,
    ...Accordion,
    MdButton,
    GoTop,
    Cascade,
    Scalable
};
