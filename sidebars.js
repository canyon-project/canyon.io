module.exports = {
  docs: [
      // 介绍
    {
      type: 'doc',
      id:'introduction'
    },
    {
      type: 'category',
      label: 'Installation',
      items: [
        {
          type: 'category',
          label: 'Server',
          items: [
            {
              type: 'category',
              label: 'Provider',
              items: [
                  'installation/server/provider/gitlab'
              ],
            }
          ],
        },
      ],
    },
      // 概念
    {
      type: 'category',
      label: '概念',
      items: ['concepts/coverage','concepts/architecture'],
    },
      // 开始
    {
      type: 'category',
      label: '开始',
      items: ['get_started/nodejs','get_started/docker','get_started/first_coverage'],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [    // 外部链接
        {
          type: 'link',
          label: 'API Reference', // 链接标签
          href: 'https://canyon-project.github.io/canyon.io/api-reference', // 外部 URL
        },],
    },
  ],
};
