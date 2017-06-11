// Test examples
import Test from './test/test';
document.querySelector('#app').innerHTML = Test.content;
Test.addHandlers();
// Test examples

if (module.hot) {
	module.hot.accept();
}