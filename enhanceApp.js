import store from './store';
import Antd from 'ant-design-vue';
import './styles/index.scss';
import 'ant-design-vue/dist/antd.less';

export default ({
  Vue,
  options,
  router,
  siteData,
}) => {
  Vue.mixin({ store })
  Vue.use(Antd)
}