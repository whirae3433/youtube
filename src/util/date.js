import { format, register } from 'timeago.js';
import ko from 'timeago.js/lib/lang/ko';

register('ko', ko);

export function formatAgo(date, lang = 'en_US') {
  return format(date, lang);
}
