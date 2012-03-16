<?php defined('SYSPATH') OR die('No direct access allowed.');

/**
 * Main Settings Controller
 *
 * PHP version 5
 * LICENSE: This source file is subject to GPLv3 license 
 * that is available through the world-wide-web at the following URI:
 * http://www.gnu.org/copyleft/gpl.html
 * @author     Ushahidi Team <team@ushahidi.com> 
 * @package	   SwiftRiver - http://github.com/ushahidi/Swiftriver_v2
 * @subpackage Controllers
 * @copyright  Ushahidi - http://www.ushahidi.com
 * @license    http://www.gnu.org/copyleft/gpl.html GNU General Public License v3 (GPLv3) 
 */
class Controller_Settings_Main extends Controller_Swiftriver {
	
	// Active settings menu
	protected $active;

	/**
	 * Access privileges for this controller and its children
	 */
	public $auth_required = 'admin';
	
	/**
	 * @return	void
	 */
	public function before()
	{
		// Execute parent::before first
		parent::before();
		
		$this->template->content = View::factory('pages/settings/layout')
			->bind('active', $this->active)
			->bind('settings_content', $this->settings_content);
	}
	
	/**
	 * List all the available settings
	 *
	 * @return  void
	 */
	public function action_index()
	{
		$this->settings_content = View::factory('pages/settings/main');
		$this->active = 'main';	
		
		if ($this->request->post())
		{
			$validation = Validation::factory($this->request->post())
				->rule('site_name', 'not_empty')
				->rule('site_locale', 'not_empty');
			if ($validation->check())
			{
				Model_Setting::update_setting('site_name', $this->request->post('site_name'));
				Model_Setting::update_setting('site_locale', $this->request->post('site_locale'));
				Model_Setting::update_setting('public_registration_enabled', $this->request->post('public_registration_enabled') == 1);
				Model_Setting::update_setting('anonymous_access_enabled', $this->request->post('anonymous_access_enabled') == 1);
				$this->settings_content->set('messages', array(__('Settings saved successfully.')));
			}
			else
			{
				$this->settings_content->set('errors', $validation->errors('user'));
			}
		}
		
		$setting_keys = array('site_name', 'site_locale', 'public_registration_enabled', 'anonymous_access_enabled');
		$this->settings_content->settings = Model_Setting::get_settings($setting_keys);
	}

}