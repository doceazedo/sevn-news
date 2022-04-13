<script lang="ts" context="module">
  import { useArticle } from '$lib/modules/article/articles.store';
  import type { ParsedArticle } from '$lib/components/article';

  export async function load({ params, fetch }) {
    const slug = params.slug.split('-');
    const id = slug?.[slug.length - 1];
    const article = await useArticle(id);

    console.log(article);
    if (article == null || article?.status)
      return {
        status: article?.status || 500,
        error: new Error(article?.message || 'Internal Server Error'),
      };

    return {
      props: {
        article,
      },
    };
  }
</script>

<script lang="ts">
  import {
    TextBodyMedium,
    TextSubtitleMedium,
    TextSubtitleSmall,
    TextTitleWithLabel,
  } from '$lib/components/text';
  import { SpacerHeight } from '$lib/components/spacer';
  import { AdPlaceholder } from '$lib/components/ad-placeholder';

  export let article: ParsedArticle;
</script>

<TextTitleWithLabel label={article.category} color={article.color}>
  {article.title}
</TextTitleWithLabel>

<SpacerHeight size={30} />

<TextSubtitleMedium>
  {article.subtitle}
</TextSubtitleMedium>

<SpacerHeight size={30} />

<TextSubtitleSmall>
  {article.date}, por: {article.author}
</TextSubtitleSmall>

<SpacerHeight size={40} />

<AdPlaceholder />

<SpacerHeight size={64} />

<TextBodyMedium>
  {@html article.article}
</TextBodyMedium>
