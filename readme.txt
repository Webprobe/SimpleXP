=== SimpleXP ===
Author: Riccardo Brivio
Requires at least: 5.4
Tested up to: 6.7
Requires PHP: 5.6
Version: 1.1.8
License: GNU General Public License v3.0
License URI: http://www.gnu.org/licenses/gpl-3.0.html

== Description ==
SimpleXP is a simple customizable lightweight responsive starter theme (translation and WooCommerce ready), it allows
you to create super fast lightweight and minimal custom websites and e-commerce. You can also customize
it in various elements including font, colors, header and footer.

SimpleXP's header allows you to set the text and background color and create a background transparency effect
of it by simply setting an rgba value or an 8-digit hex. It allows you to set the position of the menu
(right, left) or center logo and menu.
It is possible to show a notice above the header (e.g., 10% discount) with a link to a page.
Finally, it is possible to show a search bar and choose whether to search only for products.
The header has two menus, the main one in which you can insert the site menu (if WooCommerce is active
and user is logged in a dropdown element is added with the user's name and some links to the main
ecommerce pages).
The other menu (addons) allows you to add more links (to add a button to a link in this menu add the
class .btn to the menu element) it also shows the shopping cart icon in the ecommerce pages.

SimpleXP manages the layout for the blog, searches, categories and tags as well as ecommerce.
SimpleXP offers animations for loading page elements and for the mobile menu.

SimpleXP allows you to choose between links and buttons colors, the font is customizable.
Custom widgets can easily be added in the SimpleXP footer.

SimpleXP comes with some patterns (11) that allow for quick creation of content on pages and offer
the possibility of being customized to your needs and taste in just few steps.

You can make a pattern or element appear with the full width simply by adding the fullwidth
class to the element in question. In Gutenberg -> Block -> Advanced -> Additional CSS class.

SimpleXP has a set of custom icons that are fully integrated. To use the icons simply add the related
class from the following list to a span element.The icons are as follows: (.icon-phone .icon-envelope
.icon-x .icon-clock-o .icon-calendar .icon-codepen .icon-linkedin .icon-github .icon-youtube-play
.icon-instagram .icon-whatsapp .icon-facebook .icon-map .icon-map-marker .icon-chevron-up .icon-chevron-down
.icon-chevron-left .icon-chevron-right .icon-code .icon-line-chart .icon-briefcase .icon-wrench .icon-globe
.icon-shield)

SimpleXP offers the following alternative templates for displaying pages:

- Header on Scroll, Shows the header background after scrolling the 80vh page.
- Header Transparent, Leaves the header background transparent throughout the page.
- No Title, it's like the default template but does not show the main title of the page.
- The Block Template (contained in templates/block-template.html), allows you to add blocks to create pages in a
  few simple steps and through this template you can use all the features of Full Site Editing because it allows
  you to create Web pages using the parts of the template footer.html and header.html (included in the parts/ folder)
  you can modify these last two templates (footer and header) by going to the BackEnd Appearance -> Pattern.

To activate ecommerce, just install the WooCommerce plugin.

SimpleXP supports the One Page Scroll feature, to create links that point inside the page you simply need to create a menu
item or a sub-menu item (custom link) and insert the id of the section to point to eg. #section-1. If instead you want the
sections to be reachable through the various pages of the site you always need to create a menu item or a sub-menu item
(custom link) and specify the complete url of the site in addition to the page with the section to point to
eg. my - website .com/#section.
Obviously inside the page in both cases you need to specify the id of the section by going to the element -> advanced ->
html anchor and specify the id eg. section-1

SimpleXP supports the creation of drop-down menus in the header by simply indenting (i.e., creating a sub-element to a
main item) the menu items created in the header.


== Features ==
- Clean and minimal design
- Lightweight and fast
- Easy to customize
- E-commerce ready
- Follows WordPress coding standards
- Responsive layout
- SEO-friendly
- Patterns for easy content creation
- Full Site Editing ready

== Installation ==
1. In the admin panel menu go to Apparence => Themes and click Add New Theme
2. Search SimpleXP in the search field and hit enter
3. Click "Install" and then "Activate"
4. Customize the SimpleXP theme as you prefer 

Alternatively
1. Upload the "SimpleXP" folder to the "/wp-content/themes/" directory in your WordPress installation.
2. Activate the theme through the 'Themes' menu in WordPress admin panel by clicking "Activate"
3. Customize your theme by modifying the template files, CSS styles, and JavaScript files

== Frequently Asked Questions ==
1. Can I use SimpleXP for commercial projects?
   Yes, SimpleXP is licensed under the GNU General Public License v3, which allows you to
   use it for both personal and commercial projects.

2. Does SimpleXP support custom post types and taxonomies?
   Yes, SimpleXP provides basic support for custom post types and taxonomies. You can easily extend the
   theme to add custom functionality.

3. Is SimpleXP compatible with WooCommerce?
   Yes, SimpleXP is e-commerce ready and offers integration with WooCommerce. You can enable e-commerce 
   by installing the WooCommerce plugin and following the setup instructions.

4. Is SimpleXP a block theme?
   SimpleXP is a hybrid theme that allows you to develop the websites using both modes. Thus, both
   classic and block mode are supported. The classic mode is the one used by default; to be able to use
   the full site mode, simply create a page and select “Block Template” as the template (in the page settings) to use to view the page;
   this template includes the header.html and footer.html files to show the content of the page. The
   parts of the header.html and footer.html templates are customizable by going to Appearance -> Templates
   in the backend of the site.

== To Do ==

* Improve animations (animation system)
* add custom color for overlay icon background



== Changelog ==
= 1.1.8 =
* fix fadeInUp css
* fix blog seo structure

= 1.1.7 =
* add .alignfull and .alignwide classes

= 1.1.6 =
* add custom font and weights for headings
* add different overlay icons
* removed body scroll with mobile menu open

= 1.1.5 =
* fix 20px spacing from top in fade class
* fix multiple menu opening on mobile
* Add One Page Scroll

= 1.1.4 =
* Fix logo style in header and footer
* Add Fluid Font sizes
* Fixed sub menu on mobile (show closed by default now click to open)
* fix header search style
* fix menu and logo centerd style

= 1.1.3 =
* Set thumbnails Aspect Ratio to 16:9
* Add custom templates (header-on-scroll, header-transparent, no-title)
* Improved related post slider
* Add block-template ( can be selected from dropdown in page settings -> Template) to create
templates in Full Site Editing mode
* Add categories to patterns with custom categories

= 1.1.2 =
* Fix custom font in Gutenberg(backend)
* Fix FAQ style
* Improved mobile menu keyboard navigation
* Fixed general style bugs

= 1.1.1 =
* Fix keyboard navigation
* Fix link within content underline
* Unique prefix script.js
* Screenshot.png changed



== Copyright ==
SimpleXP WordPress Theme, (C) 2024 Webprobe.it
SimpleXP is distributed under the terms of the GNU General Public License v3.0 or later.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

SimpleXP bundles the following third-part resources:

Font Awesome - https://fontawesome.com/search?o=r&m=free
License: Distributed under the terms of the Font Awesome Free License, CC 4.0 International License (SVG icons).
Copyright: Fonticons, Inc., https://fontawesome.com

Screenshot Image, (C) Stefan Kunze
License: CC0 1.0 Universal (CC0 1.0)
Source: https://stocksnap.io/photo/sun-sunset-Q9JZU4XLNV

The remaining resources/code was created by Riccardo Brivio for the SimpleXP theme and is distributed
in accordance with WordPress via the GPL v3 license.