<?php
/**
* @package SwiftNinjaProBetterScrollBar
*/
/*
Plugin Name: Simply Better Scroll Bar
Description: A simple, better looking scrollbar for your website.
Version: 1.2.5
Author: SwiftNinjaPro
Author URI: https://www.swiftninjapro.com
License: GPLv2 or later
Text Domain: swiftninjapro-better-scroll-bar
*/

/*
This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
*/

if(!defined('ABSPATH')){
  echo '<meta http-equiv="refresh" content="0; url=/404">';
  die('404 Page Not Found');
}

if(!class_exists('SwiftNinjaProBetterScrollBar')){

  class SwiftNinjaProBetterScrollBar{
    
    function register(){
      add_action('wp_enqueue_scripts', array($this, 'enqueue'));
      add_action('admin_enqueue_scripts', array($this, 'enqueue'));
    }
    
    function activate(){
      flush_rewrite_rules();
    }
    
    function deactivate(){
      flush_rewrite_rules();
    }
    
    function enqueue(){
      wp_enqueue_style('SwiftNinjaProBetterScrollBarStyle', plugins_url('/assets/style.css', __FILE__), null, '1.0');
      //wp_enqueue_script('SwiftNinjaProBetterScrollBarScript', plugins_url('/assets/script.js', __FILE__), null, '1.0');
    }
    
  }

  $swiftNinjaProBetterScrollBar = new SwiftNinjaProBetterScrollBar();
  $swiftNinjaProBetterScrollBar->register();

  register_activation_hook(__FILE__, array($swiftNinjaProBetterScrollBar, 'activate'));
  register_deactivation_hook(__FILE__, array($swiftNinjaProBetterScrollBar, 'deactivate'));
}
