<?php

add_filter( 'woocommerce_enqueue_styles', '__return_false' );

remove_action( 'woocommerce_shop_loop_subcategory_title', 'woocommerce_template_loop_category_title', 10 );
add_action( 'woocommerce_shop_loop_subcategory_title', function ( $category ) {
    echo '<h6>' . esc_html( $category->name ) . '</h6>';
    echo '<small class="text-body">' . $category->count . __( ' Products', 'woostudy' ) . '</small>';
} );

remove_action( 'woocommerce_before_shop_loop_item', 'woocommerce_template_loop_product_link_open', 10 );
remove_action( 'woocommerce_after_shop_loop_item', 'woocommerce_template_loop_product_link_close', 5 );;



//remove_action( 'woocommerce_before_shop_loop_item_title', 'woocommerce_show_product_loop_sale_flash', 10 );;


remove_action( 'woocommerce_shop_loop_item_title', 'woocommerce_template_loop_product_title', 10 );
add_action( 'woocommerce_shop_loop_item_title', function () {
    // https://woocommerce.github.io/code-reference/classes/WC-Product.html
    global $product;
    /** @var WC_Product $product */
    echo '<a class="h6 text-decoration-none text-truncate" href="' . $product->get_permalink() . '">' . $product->get_title() . '</a>';
} );
remove_action( 'woocommerce_after_shop_loop_item_title', 'woocommerce_template_loop_rating', 5 );


add_filter( 'woocommerce_add_to_cart_fragments', function ( $fragments ) {
    $fragments['.mini-cart-cnt'] = '<span class="badge text-dark border  rounded-circle  mini-cart-cnt">' . count( WC()->cart->get_cart() ) . '</span>';
    return $fragments;
} );

remove_action( 'woocommerce_before_main_content', 'woocommerce_breadcrumb', 20 );
add_filter( 'woocommerce_breadcrumb_defaults', function() {
    return array(
        'delimiter'   => '&nbsp;/&nbsp;',
        'wrap_before' => '<nav class="breadcrumb bg-light mb-30">',
        'wrap_after'  => '</nav>',
        'before'      => '',
        'after'       => '',
        'home'        => __( 'Home', 'woostudy' ),
    );
} );

remove_action( 'woocommerce_before_shop_loop', 'woocommerce_output_all_notices', 10 );

add_action( 'template_redirect', function () {
    if ( is_product() ) {
        remove_action( 'woocommerce_sidebar', 'woocommerce_get_sidebar', 10 );
    }
} );

remove_action( 'woocommerce_before_single_product_summary', 'woocommerce_show_product_sale_flash', 10 );


// Remove sale flash from gallery
remove_action( 'woocommerce_before_single_product_summary', 'woocommerce_show_product_sale_flash', 10 );

// remove related products from product page
remove_action( 'woocommerce_after_single_product_summary', 'woocommerce_output_related_products', 20 );
// remove upsell from product page
remove_action( 'woocommerce_after_single_product_summary', 'woocommerce_upsell_display', 15 );