<?php

return [
  'sortBySort' => function () {
    if ($this->first()->sort() != ''):
      return $this->sortBy('sort');
    else:
      return $this;
    endif;
  },
];