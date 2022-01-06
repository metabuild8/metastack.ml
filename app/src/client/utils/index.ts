export function cn(...cls: any[]): string {
  const hasOwn = {}.hasOwnProperty;
  const classes = [];

  for (let i = 0; i < cls.length; i++) {
    const arg = cls[i];
    if (!arg) continue;

    const argType = typeof arg;
    if (argType === "string" || argType === "number") {
      classes.push(arg);
    } else if (Array.isArray(arg) && arg.length) {
      const inner = cn(arg);
      if (inner) {
        classes.push(inner);
      }
    } else if (argType === "object") {
      for (const key in arg) {
        if (hasOwn.call(arg, key) && arg[key]) {
          classes.push(key);
        }
      }
    }
  }
  return classes.join(" ");
}

export const copyToClipboard = (text: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (navigator?.clipboard) {
      const cb = navigator.clipboard;

      cb.writeText(text).then(resolve).catch(reject);
    } else {
      try {
        const body = document.querySelector("body");

        const textarea = document.createElement("textarea");
        body?.appendChild(textarea);

        textarea.value = text;
        textarea.select();
        document.execCommand("copy");

        body?.removeChild(textarea);

        resolve();
      } catch (e) {
        reject(e);
      }
    }
  });
};
