import ankerColors, * as anker from 'anker-colors';
import * as deepAssign from 'deep-assign';
import * as hexRgb from 'hex-rgb';

export type Flavor = 'light' | 'dark';

function screen(flavor: Flavor, custom = {}) {
  if (flavor !== 'light' && flavor !== 'dark') {
    flavor = 'dark';
  }

  const themeColors = anker.themes[flavor];

  const colors = {
    ...ankerColors
  };

  const header = style => ({
    fontFamily: fonts.header,
    fontWeight: 400,
    color: themeColors.heading,
    lineHeight: 1,
    margin: '0 auto 2rem',
    ...style
  });

  const fonts = {
    body: `'Open Sans', Helvetica, sans-serif`,
    header: `'Open Sans Condensed', 'Arial Narrow', Impact, sans-serif`,
    highlight: `Cookie, cursive`,
    code: `'Fira Code', 'Fira Mono', monospace`
  };

  const linkHoverStyles = {
    color: themeColors.heading
  };

  const linkStyles = {
    display: 'inline-block',
    color: themeColors.text,
    textDecoration: 'none',
    marginBottom: '-2px',
    borderBottom: `2px solid ${anker.shades.limeGreen['300']}`,
    ':hover': linkHoverStyles
  };

  const italic = {
    fontFamily: fonts.highlight,
    fontSize: '1.5em',
    marginRight: '0.15em',
    color: themeColors.heading
  };

  const theme = {
    colors,
    fonts,
    global: {
      body: {
        background: themeColors.background,
        color: themeColors.text,
        fontFamily: fonts.body,
        fontSize: '100%',
        overflow: 'hidden'
      },
      'html, body': {
        height: '100%'
      },
      '*': {
        boxSizing: 'border-box'
      },
      em: italic,
      a: linkStyles,
      'a:hover': linkHoverStyles
    },

    // Presentation Components
    // ---------------
    components: {
      blockquote: {
        display: 'inline-block',
        textAlign: 'left',
        position: 'relative',
        margin: 0,
        padding: '1.2rem 0 1.2rem 2rem',
        borderLeft: `6px double ${anker.primary}`
      },
      quote: {
        display: 'block',
        fontSize: '4rem',
        fontWeight: 'bold',
        lineHeight: 1.1
      },
      cite: {
        display: 'block',
        marginTop: '2.5rem',
        fontSize: '1.5rem',
        opacity: 0.6
      },
      content: {
        margin: '0 auto',
        textAlign: 'center'
      },
      heading: {
        h1: header({
          fontSize: '7rem',
          textTransform: 'uppercase'
        }),
        h2: header({
          fontSize: '5rem',
          textTransform: 'uppercase'
        }),
        h3: header({
          fontSize: '3rem',
          color: themeColors.text
        }),
        h4: header({
          fontSize: '2rem',
          color: themeColors.text
        }),
        link: {
          textDecoration: 'none'
        }
      },
      text: {
        fontSize: '1.75rem',
        margin: '0 auto 0.5rem'
      },
      s: {
        strikethrough: {},
        italic
      },
      link: linkStyles,
      listItem: {
        fontSize: '2rem',
        padding: '0.25em 0'
      },
      list: {
        textAlign: 'left',
        padding: '0 0 0 3rem'
      },
      tableHeaderItem: {
        fontSize: '2.25rem',
        fontWeight: 'bold',
        border: `2px solid ${anker.shades.darkBlue['300']}`,
        padding: '0.5rem 0'
      },
      tableItem: {
        fontSize: '1.5rem',
        border: `2px solid ${anker.shades.darkBlue['300']}`,
        padding: '1rem 0.5rem'
      },
      table: {
        width: '100%',
        borderCollapse: 'collapse'
      },
      image: {
        display: 'block',
        margin: '0.5rem auto'
      },
      code: {
        display: 'inline-block',
        color: anker.shades.darkBlue['700'],
        fontFamily: fonts.code,
        fontSize: '90%',
        lineHeight: 1,
        background: anker.lightGray,
        padding: '6px 5px 3px',
        borderRadius: '2px'
      },
      codePane: {
        pre: {
          margin: 'auto',
          fontSize: '0.8rem',
          fontWeight: 'normal',
          fontFamily: fonts.code,
          minWidth: '100%',
          maxWidth: 800
        },
        code: {
          textAlign: 'left',
          fontWeight: 'normal'
        }
      }
    },

    // Controls (-> none)
    // ---------------
    controls: {
      prev: {
        display: 'none'
      },
      next: {
        display: 'none'
      }
    },

    // Progress
    // ---------------
    progress: {
      pacman: {
        container: {
          position: 'absolute',
          bottom: '5px',
          left: '50%',
          transition: 'all 1s ease-in-out 0.2s',
          zIndex: 1000
        },
        pacman: {
          position: 'absolute',
          transition: 'left 0.3s ease-in-out 0.2s',
          width: '20px',
          height: '20px',
          transform: 'translate(-5px, -5px)'
        },
        pacmanTop: {
          position: 'absolute',
          content: '',
          width: '20px',
          height: '10px',
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',
          background: anker.primary
        },
        pacmanBottom: {
          position: 'absolute',
          content: '',
          width: '20px',
          height: '10px',
          borderBottomLeftRadius: '10px',
          borderBottomRightRadius: '10px',
          background: anker.primary,
          top: '10px'
        },
        point: {
          position: 'absolute',
          float: 'left',
          background: 'transparent',
          width: '10px',
          height: '10px',
          borderWidth: 2,
          borderStyle: 'solid',
          borderColor: anker.primary,
          borderRadius: '50%',
          transition: 'all 0.01s ease-out 0.4s'
        }
      },
      bar: {
        container: {
          position: 'absolute',
          height: '6px',
          width: '100%',
          bottom: 0,
          left: 0,
          transition: 'all .8s ease-in-out 0.2s',
          zIndex: 1000
        },
        bar: {
          height: '100%',
          background: anker.primary,
          transition: 'all 0.3s ease-out'
        }
      },
      number: {
        container: {
          position: 'absolute',
          bottom: 10,
          right: 10,
          zIndex: 1000,
          color: anker.primary
        }
      }
    }
  };

  return deepAssign({}, theme, custom);
}

export default screen;
