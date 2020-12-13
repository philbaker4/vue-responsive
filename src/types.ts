interface WindowRect {
    width: number;
    height: number;
  }
  interface ResponsiveData {
    window: WindowRect;
    smLower: number;
    mdLower: number;
    lgLower: number;
    xlLower: number;
    xxlLower: number;
    timeout?: ReturnType<typeof setTimeout>;
    delay: number;
  }
  
  interface Breakpoints {
    smLower: number;
    mdLower: number;
    lgLower: number;
    xlLower: number;
    xxlLower: number;
  }
  
    export { ResponsiveData, Breakpoints}