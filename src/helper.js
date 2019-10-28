let styleSheet;

try {
    const style = document.createElement('style');

    style.type = 'text/css';

    document.getElementsByTagName('head')[0].appendChild(style);

    styleSheet = document.styleSheets[document.styleSheets.length - 1];
} catch (err) {}

export function insertRule(selector, content) {
    if (styleSheet) {
        if (styleSheet.insertRule) {
            styleSheet.insertRule(`${selector} { ${content} }`, 0);
        } else if (styleSheet.addRule) {
            styleSheet.addRule(selector, content, 0);
        }
    }
}
