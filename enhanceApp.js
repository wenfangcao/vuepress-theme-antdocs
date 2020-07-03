import store from './store';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';
import './styles/index.scss';

export default ({
  Vue,
  options,
  router,
  siteData,
}) => {
  Vue.mixin({ store })
  Vue.use(Antd)
}