import _Vue from "vue";

import {ResponsiveData, Breakpoints} from './types';

function getResponsiveMixin(bp: Breakpoints = {
    smLower: 640,
    mdLower: 768,
    lgLower: 1024,
    xlLower: 1280,
    xxlLower: 1536,
}) {
    return _Vue.extend({
        data() {
            const d: ResponsiveData = {
                window: {
                    width: 0,
                    height: 0,
                },
                timeout: undefined,
                delay: 10,
                ...bp
            }
            return d
        },
        created(): void {
            window.addEventListener('resize', this.handleResize);
            this.handleResize();
        },
        destroyed(): void {
            window.removeEventListener('resize', this.handleResize);
        },
        methods: {
            handleResize(): void {
                if (!this.timeout) {
                    clearTimeout(this.timeout);
                }
                this.timeout = setTimeout(() => {
                    this.window.width = window.innerWidth;
                    this.window.height = window.innerHeight;
                }, this.delay);
            },
            widthAbove(n: number): boolean {
                return n < this.window.width;
            },
            widthBelow(n: number): boolean {
                return n > this.window.width;
            },
            widthAboveOrEqualTo(n: number): boolean {
                return n >= this.window.width;
            },
            widthBelowOrEqualTo(n: number): boolean {
                return n <= this.window.width;
            },
        },
        computed: {
            screenSize(): string {
                if (this.window.width < this.smLower) {
                    return 'xs';
                } else if (this.window.width < this.mdLower) {
                    return 'sm';
                } else if (this.window.width < this.lgLower) {
                    return 'md';
                } else if (this.window.width < this.xlLower) {
                    return 'lg';
                }
                else if (this.window.width < this.xxlLower) {
                    return 'xl';
                }
                else {
                    return 'xxl';
                }
            },
            smAndUp(): boolean {
                return this.window.width > this.smLower;
            },
            mdAndUp(): boolean {
                return this.window.width > this.mdLower;
            },
            lgAndUp(): boolean {
                return this.window.width > this.lgLower;
            },
            xlAndUp(): boolean {
                return this.window.width > this.xlLower;
            },
    
            smAndDown(): boolean {
                return this.window.width < this.mdLower;
            },
            mdAndDown(): boolean {
                return this.window.width < this.lgLower;
            },
            lgAndDown(): boolean {
                return this.window.width < this.xlLower;
            },
            xlAndDown(): boolean {
                return this.window.width < this.xxlLower;
            },
    
            xsOnly(): boolean {
                return this.screenSize === 'xs';
            },
            smOnly(): boolean {
                return this.screenSize === 'sm';
            },
            mdOnly(): boolean {
                return this.screenSize === 'md';
            },
            lgOnly(): boolean {
                return this.screenSize === 'lg';
            },
            xlOnly(): boolean {
                return this.screenSize === 'xl';
            },
            xxlOnly(): boolean {
                return this.screenSize === 'xxl';
            },
        },
    });
}


let instance: _Vue;

const responsiveSetup = (bp?: Breakpoints) => {
	if (instance) return instance;
	instance = new _Vue(getResponsiveMixin(bp));
	return instance;
};

// Create a simple _Vue plugin to expose the wrapper object throughout the application
const ResponsivePlugin = {
	install(Vue: typeof _Vue, bp?: Breakpoints) {
		Vue.prototype.$responsive = responsiveSetup(bp);
	},
};

export { getResponsiveMixin, ResponsivePlugin };
