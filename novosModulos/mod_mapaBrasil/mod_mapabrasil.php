<?php
/**
 * Mapa Brasil! Module Entry Point
 * 
 * @package    rsjuliao.symbora
 * @subpackage Modules
 * @license    GNU/GPL, see LICENSE.php
 * Esse é um simples mapa do brasil!
 */

// No direct access
defined('_JEXEC') or die;
// Include the syndicate functions only once
require_once dirname(__FILE__) . '/helper.php';

$hello = ModMapaBrasilHelper::getHello($params);
         
require JModuleHelper::getLayoutPath('mod_mapabrasil');



