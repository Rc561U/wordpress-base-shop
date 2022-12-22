<?php

function woostudy_setup()
{
    add_theme_support('title-tag');
    add_theme_support('post-thumbnail');
    add_theme_support('woocommerce');
    register_nav_menus(
        array(
            'menu-1' => __('Top Menu', 'woostudy'),
            'menu-2' => __('Categories Menu', 'woostudy'),
            'menu-3' => __('Navbar menu', 'woostudy'),
        )
    );
}

add_action('after_setup_theme', 'woostudy_setup');
add_action('wp_head', function () {
    echo '<link rel="preconnect" href="https://fonts.gstatic.com">';
}, 5);


function woostudy_scripts()
{
    wp_enqueue_style('woostudy-google-fonts', 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap', array(), null);
    wp_enqueue_style('woostudy-fontawesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css');
    wp_enqueue_style('woostudy-animate', get_template_directory_uri() . '/assets/lib/animate/animate.min.css');
    wp_enqueue_style('woostudy-owlcarousel', get_template_directory_uri() . '/assets/lib/owlcarousel/assets/owl.carousel.min.css');
    wp_enqueue_style('woostudy-main', get_template_directory_uri() . '/assets/css/style.css');
    wp_enqueue_style('woostudy-custom', get_template_directory_uri() . '/assets/css/custom.css');
    wp_enqueue_script('jquery');
    wp_enqueue_script('woostudy-owlcarousel', get_template_directory_uri() . '/assets/lib/owlcarousel/owl.carousel.js', array(), false, true);
    wp_enqueue_script('woostudy-bootstrap', 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js', array(), false, true);
    wp_enqueue_script('woostudy-easing', get_template_directory_uri() . '/assets/lib/easing/easing.min.js', array(), false, true);
    wp_enqueue_script('woostudy-main', get_template_directory_uri() . '/assets/js/main.js', array(), false, true);
}

add_action('wp_enqueue_scripts', 'woostudy_scripts');

require_once get_template_directory() . '/inc/woocommerce-hooks.php';
require_once get_template_directory() . '/inc/class-woostudy-menu-categories.php';
require_once get_template_directory() . '/inc/class-woostudy-menu-navbar.php';


function woostudy_debug($data)
{
    echo "<pre>" . print_r($data, 1) . "</pre>";
}