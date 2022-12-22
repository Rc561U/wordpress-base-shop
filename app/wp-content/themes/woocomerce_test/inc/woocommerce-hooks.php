<?php

// Отключение стилей WooCommerce
add_filter( 'woocommerce_enqueue_styles', '__return_empty_array' );

// Список категорий товаров
remove_action( 'woocommerce_shop_loop_subcategory_title', 'woocommerce_template_loop_category_title', 10 );
add_action( 'woocommerce_shop_loop_subcategory_title', function ( $category ) {
	echo '<h6>' . esc_html( $category->name ) . '</h6>';
	echo '<small class="text-body">' . $category->count . __( ' Products', 'woostudy' ) . '</small>';
} );

// Ссылка на товар в карточке товара
remove_action( 'woocommerce_before_shop_loop_item', 'woocommerce_template_loop_product_link_open', 10 );
remove_action( 'woocommerce_after_shop_loop_item', 'woocommerce_template_loop_product_link_close', 5 );

// Название товара в карточке товара
remove_action( 'woocommerce_shop_loop_item_title', 'woocommerce_template_loop_product_title', 10 );
add_action( 'woocommerce_shop_loop_item_title', function () {
	// https://woocommerce.github.io/code-reference/classes/WC-Product.html
	global $product;
	/** @var WC_Product $product */
	echo '<a class="h6 text-decoration-none text-truncate" href="' . $product->get_permalink() . '">' . $product->get_title() . '</a>';
} );

// Рейтинг товара в карточке товара
remove_action( 'woocommerce_after_shop_loop_item_title', 'woocommerce_template_loop_rating', 5 );
