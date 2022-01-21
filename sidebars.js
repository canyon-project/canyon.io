module.exports = {
  docs: [
      // 介绍
    {
      type: 'doc',
      id:'introduction'
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
  ],
};
