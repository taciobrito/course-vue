var hello = new Vue({
	el: '#hello',
	data: {
		msg: "Hello Vue!",
		people:[
			{name: "Maria"},
			{name: "Pedro"},
			{name: "Gustavo"},
			{name: "Joana"},
			{name: "Gabriela"},
		],
		newElement: '',
		elements: [],
		objectA:{
			'font-size':'30px',
		},
		objectB:{
			'color':'red',
		},
	},
	methods:{
		addElement: function(){
			var title = this.newElement.trim();
			if( title ) {
				this.elements.push({title: title});
				this.newElement = '';
			}
		},
		removeElement: function(e, index){
			e.preventDefault();
			this.elements.splice(index, 1);
		},
		myClick: function(){
			alert('clicado');
		},
		myKeyup: function(){
			alert('keypzado');
		},
	}
});