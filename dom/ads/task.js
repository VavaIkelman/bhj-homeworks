class PolySwitch {
	constructor(root, delay) {
  	this.root = root;
	this.delay = document.querySelector('.rotator__case_active').getAttribute('data-speed');
    this.isRunning = true;
    this.timeout = setTimeout(this.loop.bind(this), this.delay);
  }
  
  loop() {
  	this.setActiveElement();
    
    if(this.isRunning){
    	this.timeout = setTimeout(this.loop.bind(this), this.delay);
  }
}
  
	setActiveElement(element) {
  	const active = this.root.querySelector(".rotator__case_active");
  	const next = element || this.root.querySelector(".rotator__case_active + .rotator__case") || this.root.querySelector(".rotator__case");
	active.style.color = active.getAttribute('data-color');
  	active.classList.remove("rotator__case_active");
 	next.classList.add("rotator__case_active");
  }
}

new PolySwitch(document.querySelector(".rotator"), this.delay);