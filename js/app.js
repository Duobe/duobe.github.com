/*
 * author:Fennie
 * date:2015/10/30
 * decription: vue.js -- todolist
 *
 * */
var vue = new Vue({
	el: '#demo',
	data: {
		input: '',
		title: 'Todos',
		mydata: [{
			text: 'Enter text to press enter or press Add key.',
			checked: false,
		}, {
			text: 'This is written in Vue.js v1.0.1',
			checked: false,
		}]
	},
	methods: {
		add: function(index) {
			if (this.checked) {
				this.mydata.splice(index, 1, {});
			}
			var text = this.input.trim();
			if (text) {
				this.mydata.unshift({
					text: text,
					checked: false,
				});
				this.input = '';
			};
		},
		remove: function(index) {
			this.mydata.splice(index, 1);
		},
		removeAll: function() {
			this.mydata.splice(0, this.mydata.length);
		},
		foo: function(index){
			var txt = this.mydata[index].text,
				checked = this.mydata[index].checked;
			console.log(this.mydata[index]);
			this.mydata.splice(index, 1);
			if (index > -1&& !checked) {
				this.mydata.push({
					text: txt,
					checked: !checked,
				});
			} else {
				this.mydata.unshift({
					text: txt,
					checked: !checked,
				});
			}
		}
	}
});