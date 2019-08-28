import vElementTableHeader from './src/index.js'

vElementTableHeader.install = function (vue) {
  vue.directive(vElementTableHeader.name, vElementTableHeader.option)
}

export default vElementTableHeader