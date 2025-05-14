declare module 'notebookjs' {
    export function parse(input: any): {
      render: () => {
        outerHTML: string;
      };
    };
  }
  