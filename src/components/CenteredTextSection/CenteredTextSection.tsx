import ReactMarkdown from 'react-markdown';
import styles from './CenteredTextSection.module.css';

interface CenteredTextSectionProps {
    markdownText: string;
}

export default function CenteredTextSection({ markdownText }: CenteredTextSectionProps) {
    return (
        <div className={styles['centered-text-section']}>
            <ReactMarkdown className={styles['centered-text-markdown']}>
                {markdownText}
            </ReactMarkdown>
        </div>
    );
}