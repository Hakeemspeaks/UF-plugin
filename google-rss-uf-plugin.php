<?php
/*
 * Plugin Name:google-rss-uf-plugin
 * Description:       google-rss-uf-plugin takes the users input
 *				      and sends an Http request to the google api
 *					  Returns the title and link for the article.
 *					  Use [ufgooglerss] as the shortcode to access the plugin.
 * Version:           1.0.0
 * Requires at least: 5.2
 * Requires PHP:      7.2
 * Author:            Hakeem Abdulmalik
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:
 * Domain Path:       /google-rss-uf-plugin
 */





// Add the access control into the request header.
function clearCorsHeader() {
	header( 'Access-Control-Allow-Origin: *' );
	header( 'Access-Control-Allow-Methods: GET' );
}
add_action('wp_head', 'clearCorsHeader');

/*************************************/

// Add styles and scripts to current page.
function add_theme_scripts() {

	wp_enqueue_style( "googlerssufplugin", get_stylesheet_uri(). '/google-rss-uf-plugin/googlerssufplugin.css', false, '1.1', 'all' );

	wp_enqueue_script('/google-rss-uf-plugin/uf-plugin-js', plugins_url('uf-plugin-js.js', __FILE__), array('jquery'),'1.1', true);

}
add_action( 'wp_enqueue_scripts', 'add_theme_scripts' );



// myUFRssLocalForm creates the form that is shown on the webpage.
// Shortcode for plugin: [ufgooglerss]
function myUFRssLocalForm()
{
	$searchBar = '
    		<input type="text" name="userSearch" value="" placeholder="Search" id="localSearchValue" required>
    		<input type="submit" value="Submit" onclick="ufsearchloadDoc()">

			<p id="demo"> test </p>
	  	';
	return $searchBar;
}

add_shortcode( 'ufgooglerss', 'myUFRssLocalForm' );

?>
