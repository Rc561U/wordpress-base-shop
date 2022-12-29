<?php
/**
 * Thankyou page
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/checkout/thankyou.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 3.7.0
 */

defined('ABSPATH') || exit;
$show_shipping = !wc_ship_to_billing_address_only() && $order->needs_shipping_address();
if (!$order) {
    return;
}

$order_items = $order->get_items(apply_filters('woocommerce_purchase_order_item_types', 'line_item'));
$show_purchase_note = $order->has_status(apply_filters('woocommerce_purchase_note_order_statuses', array('completed', 'processing')));
$show_customer_details = is_user_logged_in() && $order->get_user_id() === get_current_user_id();
$downloads = $order->get_downloadable_items();
$show_downloads = $order->has_downloadable_item() && $order->is_download_permitted();

if ($show_downloads) {
    wc_get_template(
        'order/order-downloads.php',
        array(
            'downloads' => $downloads,
            'show_title' => true,
        )
    );
}
?>

<!-- Breadcrumb Start -->
<div class="container-fluid">
    <div class="row px-xl-5">
        <div class="col-12">
            <?php woocommerce_breadcrumb(); ?>
        </div>

    </div>
</div>
<!-- Breadcrumb End -->

<div class="container-fluid">
    <div class="row px-xl-5">
        <div class="col-12">

            <div class="woocommerce-order bg-light p-30 pt-1 mb-2">

                <?php
                if ($order) :

                    do_action('woocommerce_before_thankyou', $order->get_id());
                    ?>

                    <?php if ($order->has_status('failed')) : ?>

                    <p class="woocommerce-notice woocommerce-notice--error woocommerce-thankyou-order-failed"><?php esc_html_e('Unfortunately your order cannot be processed as the originating bank/merchant has declined your transaction. Please attempt your purchase again.', 'woocommerce'); ?></p>

                    <p class="woocommerce-notice woocommerce-notice--error woocommerce-thankyou-order-failed-actions">
                        <a href="<?php echo esc_url($order->get_checkout_payment_url()); ?>"
                           class="button pay"><?php esc_html_e('Pay', 'woocommerce'); ?></a>
                        <?php if (is_user_logged_in()) : ?>
                            <a href="<?php echo esc_url(wc_get_page_permalink('myaccount')); ?>"
                               class="button pay"><?php esc_html_e('My account', 'woocommerce'); ?></a>
                        <?php endif; ?>
                    </p>

                <?php else : ?>

                    <p class="woocommerce-notice woocommerce-notice--success woocommerce-thankyou-order-received"><?php echo apply_filters('woocommerce_thankyou_order_received_text', esc_html__('Thank you. Your order has been received.', 'woocommerce'), $order); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></p>
                    <h2 class="woocommerce-order-details__title"><?php esc_html_e('Billing & Order details', 'woocommerce'); ?></h2>
                    <table class="woocommerce-order-overview woocommerce-thankyou-order-details order_details list-unstyled table table-striped">
                        <tbody class=" justify-content-left ">
                        <tr class="woocommerce-order-overview__order order">
                            <th><?php esc_html_e('Order number:', 'woocommerce'); ?></th>
                            <td>
                                <strong><?php echo $order->get_order_number(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></strong>
                            </td>
                        </tr>
                        <tr class="woocommerce-order-overview__date date">
                            <th><?php esc_html_e('Date:', 'woocommerce'); ?></th>
                            <td>
                                <strong><?php echo wc_format_datetime($order->get_date_created()); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></strong>
                            </td>
                        </tr>
                        <?php if (is_user_logged_in() && $order->get_user_id() === get_current_user_id() && $order->get_billing_email()) : ?>
                            <tr class="woocommerce-order-overview__email email">
                                <th><?php esc_html_e('Email:', 'woocommerce'); ?></th>
                                <td>
                                    <strong><?php echo $order->get_billing_email(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></strong>
                                </td>
                            </tr>
                        <?php endif; ?>

                        <tr class="woocommerce-order-overview__total total">
                            <th><?php esc_html_e('Total:', 'woocommerce'); ?>
                            </th>
                            <td>
                                <strong><?php echo $order->get_formatted_order_total(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></strong>
                            </td>
                        </tr>
                        <tr class="woocommerce-order-overview__total address">
                            <th>Address:</th>
                            <td><?php echo wp_kses_post($order->get_formatted_billing_address(esc_html__('N/A', 'woocommerce'))); ?></td>
                        </tr>
                        <?php if ($order->get_billing_phone()) : ?>
                            <tr class="woocommerce-customer-details--phone">
                                <th>Phone:</th>
                                <td><?php echo esc_html($order->get_billing_phone()); ?></td>
                            </tr>
                        <?php endif; ?>

                        <?php if ($order->get_billing_email()) : ?>
                            <tr class="woocommerce-customer-details--email">
                                <th>Email:</th>
                                <td><?php echo esc_html($order->get_billing_email()); ?></td>
                            </tr>
                        <?php endif; ?>
                        <?php
                        do_action('woocommerce_order_details_before_order_table_items', $order);

                        foreach ($order_items as $item_id => $item) {
                            $product = $item->get_product();

                            wc_get_template(
                                'order/order-details-item.php',
                                array(
                                    'order' => $order,
                                    'item_id' => $item_id,
                                    'item' => $item,
                                    'show_purchase_note' => $show_purchase_note,
                                    'purchase_note' => $product ? $product->get_purchase_note() : '',
                                    'product' => $product,
                                )
                            );
                        }

                        do_action('woocommerce_order_details_after_order_table_items', $order);
                        ?>

                        <?php
                        foreach ($order->get_order_item_totals() as $key => $total) {
                            ?>
                            <tr>
                                <th scope="row"><?php echo esc_html($total['label']); ?></th>
                                <td><?php echo ('payment_method' === $key) ? esc_html($total['value']) : wp_kses_post($total['value']); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></td>
                            </tr>
                            <?php
                        }
                        ?>
                        <?php if ($order->get_customer_note()) : ?>
                            <tr>
                                <th><?php esc_html_e('Note:', 'woocommerce'); ?></th>
                                <td><?php echo wp_kses_post(nl2br(wptexturize($order->get_customer_note()))); ?></td>
                            </tr>
                        <?php endif; ?>

                        </tbody>
                    </table>


                <?php endif; ?>
                    <div class="alert alert-info" role="alert">
                        <?php do_action('woocommerce_thankyou_' . $order->get_payment_method(), $order->get_id()); ?>
                    </div>

                <?php else : ?>

                    <p class="woocommerce-notice woocommerce-notice--success woocommerce-thankyou-order-received"><?php echo apply_filters('woocommerce_thankyou_order_received_text', esc_html__('Thank you. Your order has been received.', 'woocommerce'), null); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></p>

                <?php endif; ?>

            </div>

        </div>
    </div>
</div>

