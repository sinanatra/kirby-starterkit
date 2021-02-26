</div>
</main>
<?= js('assets/js/bundle.js') ?>

<?php if (getenv('APP_ENV') === "dev"): ?>
  <script src="http://localhost:35729/livereload.js"></script>
<?php endif;?>

</body>

</html>