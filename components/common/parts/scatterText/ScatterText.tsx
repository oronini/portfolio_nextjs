import styles from './ScatterText.module.css';

// 改行の指定: hard = 常に改行 / soft = softBreakClassName が効かない幅のときだけ改行(PC幅の整形用)
// para = 段落の区切り(改行して、空行を1つ入れる)
type Line = readonly [text: string, breakAfter?: 'hard' | 'soft' | 'para'];

type Props = {
  // 行ごとに改行を指定する場合
  lines?: readonly Line[];
  // 単純な文字列を渡す場合(\n は改行になる)
  text?: string;
  softBreakClassName?: string;
  // 集まり始めるまでの待ち時間(ms)。入場演出のあるヒーローなどで使う
  delayMs?: number;
  // true のとき、画面に入るのを待たず、ページ表示から数えて自動で始まる(ヒーロー用)
  auto?: boolean;
};

const textToLines = (text: string): Line[] => {
  const rows = text.split('\n');
  return rows.map((row, i) => [row, i < rows.length - 1 ? 'hard' : undefined]);
};

// 位置はサーバー側で決めるため、毎回同じになる擬似乱数を使う
const random = (n: number) => {
  const x = Math.sin(n * 12.9898) * 43758.5453;
  return x - Math.floor(x);
};

// 直前の文字にくっつける文字(行頭に来ないようにする)
const ATTACH_TO_PREV = /[、。，．！？!?,.」』）)]/;
const LATIN = /[A-Za-z0-9]/;

type Group = { chars: string[] };

// 英数字のかたまりや、句読点とその直前の文字は、途中で改行されないよう1グループにする
const toGroups = (text: string): (Group | ' ')[] => {
  const result: (Group | ' ')[] = [];
  let prev = '';
  for (const char of text) {
    if (char === ' ') {
      result.push(' ');
      prev = char;
      continue;
    }
    const last = result[result.length - 1];
    const joinPrev =
      last &&
      last !== ' ' &&
      (ATTACH_TO_PREV.test(char) || (LATIN.test(char) && LATIN.test(prev)));
    if (joinPrev) {
      (last as Group).chars.push(char);
    } else {
      result.push({ chars: [char] });
    }
    prev = char;
  }
  return result;
};

/**
 * 1文字ずつ画面の外側から集まって、読める文章になるテキスト。
 * 画面に入ると RevealObserver が data-inview を付け、CSS で集まる動きが始まる。
 * 読み上げ用に、元のテキストを sr-only で併記する。
 */
const ScatterText = ({
  lines: linesProp,
  text,
  softBreakClassName,
  delayMs = 0,
  auto = false,
}: Props) => {
  const lines = linesProp ?? textToLines(text ?? '');
  let index = 0;

  return (
    <span
      className={`${styles.root} ${auto ? styles.auto : ''}`}
      {...(auto ? {} : { 'data-scatter': true })}
      style={{ '--base': `${delayMs}ms` } as React.CSSProperties}
    >
      <span className="sr-only">{lines.map(([text]) => text).join('')}</span>
      <span aria-hidden="true">
        {lines.map(([text, breakAfter], lineIndex) => (
          <span key={lineIndex}>
            {toGroups(text).map((group, groupIndex) => {
              if (group === ' ') return ' ';
              return (
                <span key={groupIndex} className={styles.group}>
                  {group.chars.map((char) => {
                    const i = index++;
                    const angle = random(i * 3 + 1) * Math.PI * 2;
                    const distance = 140 + random(i * 3 + 2) * 300;
                    const style = {
                      '--x': `${Math.round(Math.cos(angle) * distance)}px`,
                      '--y': `${Math.round(Math.sin(angle) * distance)}px`,
                      '--r': `${Math.round((random(i * 3 + 3) - 0.5) * 360)}deg`,
                      '--d': `${Math.round(random(i * 7 + 5) * 600 + Math.min(i * 10, 500))}ms`,
                    } as React.CSSProperties;
                    return (
                      <span key={i} className={styles.char} style={style}>
                        {char}
                      </span>
                    );
                  })}
                </span>
              );
            })}
            {breakAfter === 'hard' && <br />}
            {breakAfter === 'soft' && <br className={softBreakClassName} />}
            {breakAfter === 'para' && (
              <>
                <br />
                <br />
              </>
            )}
          </span>
        ))}
      </span>
    </span>
  );
};

export default ScatterText;
