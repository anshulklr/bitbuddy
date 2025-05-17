// Add necessary polyfills for browser environment
if (typeof window !== 'undefined') {
  window.process = window.process || require('process/browser');
  window.Buffer = window.Buffer || require('buffer/').Buffer;
}

export const initializeGlobalPolyfills = () => {
  // Any additional polyfills can be added here
  if (typeof window !== 'undefined') {
    // Add any future polyfills here
  }
};