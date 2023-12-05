import { PropsWithChildren } from 'react';
import * as S from './styles';
import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface PostContentProps extends PropsWithChildren {
  content: string;
}

export function PostContent({ content }: PostContentProps) {
  return (
    <S.PostContentContainer>
      <Markdown
        children={content}
        components={{
          code(props) {
            const { children, className, node, ...rest } = props;
            const match = /language-(\w+)/.exec(className || '');
            return match ? (
              <SyntaxHighlighter
                key={Math.random()}
                {...rest}
                PreTag='div'
                children={String(children).replace(/\n$/, '')}
                language={match[1]}
                style={dark}
              />
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            );
          }
        }}
      />
    </S.PostContentContainer>
  );
}
