/*!
 * Version: 1.3.6 (Mar 02 2013)
 */
(function($) {
    if ($.proxy === undefined) {
        $.extend({
            proxy: function(fn, thisObject) {
                if (fn) {
                    proxy = function() {
                        return fn.apply(thisObject || this, arguments);
                    };
                }
                return proxy;
            }
        });
    }


    $.extend($.expr[':'], {
        value: function(a) {
            return $(a).val();
        }
    });

    $.extend({
        MsgBoxObject: {
            defaults: {
                name: 'jquery-msgbox',
                zIndex: 10000,
                width: 420,
                height: 'auto',
                background: '#FFFFFF',
                modal: true,
                overlay: {
                    'background-color': '#000000',
                    'opacity': 0.75
                },
                showDuration: 200,
                closeDuration: 100,
                moveDuration: 550,
                form: {
                    'active': false,
                    'action': '#',
                    'method': 'post'
                },
                emergefrom: 'top'
            },
            options: {},
            skeleton: {
                msgbox: [],
                wrapper: [],
                form: [],
                buttons: [],
            },
            visible: false,
            i: 0,
            animation: false,

            config: function(options) {
                this.options = $.extend(true, this.options, options);
                this.overlay.element.css(this.options.overlay);
                this.overlay.options.hideOnClick = !this.options.modal;
                this.skeleton.msgbox.css({
                    'width': this.options.width,
                    'height': this.options.height,
                    'background-color': this.options.background
                });
                this.moveBox();
            },

            overlay: {
                create: function(options) {
                    this.options = options;
                    this.element = $('<div id="msgbox-' + new Date().getTime() + '"></div>');
                    this.element.css($.extend({}, {
                        'position': 'fixed',
                        'top': 0,
                        'left': 0,
                        'opacity': 0,
                        'display': 'none',
                        'z-index': this.options.zIndex
                    }, this.options.style));

                    this.element.click($.proxy(function(event) {
                        if (this.options.hideOnClick) {
                            if ($.isFunction(this.options.callback)) {
                                this.options.callback();
                            } else {
                                this.hide();
                            }
                        }
                        event.preventDefault();
                    }, this));

                    this.hidden = true;
                    this.inject();
                    return this;
                },

                inject: function() {
                    this.target = $(document.body);
                    this.target.append(this.element);

                },

                resize: function(x, y) {
                    this.element.css({
                        'height': 0,
                        'width': 0
                    });
                    if (this.shim) this.shim.css({
                        'height': 0,
                        'width': 0
                    });

                    var win = {
                        x: $(document).width(),
                        y: $(document).height()
                    };

                    this.element.css({
                        'width': '100%',
                        'height': y ? y : win.y
                    });

                    if (this.shim) {
                        this.shim.css({
                            'height': 0,
                            'width': 0
                        });
                        this.shim.css({
                            'position': 'absolute',
                            'left': 0,
                            'top': 0,
                            'width': this.element.width(),
                            'height': y ? y : win.y
                        });
                    }
                    return this;
                },

                show: function() {
                    if (!this.hidden) return this;
                    if (this.transition) this.transition.stop();
                    this.target.bind('resize', $.proxy(this.resize, this));
                    this.resize();
                    if (this.shim) this.shim.css({
                        'display': 'block'
                    });
                    this.hidden = false;

                    this.transition = this.element.fadeIn(this.options.showDuration, $.proxy(function() {
                        this.element.trigger('show');

                    }, this));

                    return this;

                },

                hide: function() {
                    if (this.hidden) return this;
                    if (this.transition) this.transition.stop();
                    this.target.unbind('resize');
                    if (this.shim) this.shim.css({
                        'display': 'none'
                    });
                    this.hidden = true;

                    this.transition = this.element.fadeOut(this.options.closeDuration, $.proxy(function() {
                        this.element.trigger('hide');
                        this.element.css({
                            'height': 0,
                            'width': 0
                        });
                    }, this));

                    return this;
                }
            },

            create: function() {
                this.options = $.extend(true, this.defaults, this.options);

                this.overlay.create({
                    style: this.options.overlay,
                    hideOnClick: !this.options.modal,
                    zIndex: this.options.zIndex - 1,
                    showDuration: this.options.showDuration,
                    closeDuration: this.options.closeDuration
                });

                this.skeleton.msgbox = $('<div class="' + this.options.name + '"></div>');
                this.skeleton.msgbox.css({
                    'width': this.options.width,
                    'height': this.options.height,
                    'z-index': this.options.zIndex,
                    'background-color': this.options.background
                });

                this.skeleton.wrapper = $('<div class="' + this.options.name + '-wrapper"><i class="fa"></i></div>');
                this.skeleton.msgbox.append(this.skeleton.wrapper);

                this.skeleton.form = $('<form action="' + this.options.formaction + '" method="post"></form>');
                this.skeleton.wrapper.append(this.skeleton.form);


                $('body').append(this.skeleton.msgbox);

                this.addevents();
                return this.skeleton.msgbox;
            },

            addevents: function() {
                $(window).bind('resize', $.proxy(function() {
                    if (this.visible) {
                        this.overlay.resize();
                        this.moveBox();
                    }
                }, this));

                $(window).bind('scroll', $.proxy(function() {
                    if (this.visible) {
                        this.moveBox();
                    }
                }, this));

                this.skeleton.msgbox.bind('keydown', $.proxy(function(event) {
                    if (event.keyCode == 27) {
                        this.close(false);
                    }
                }, this));

                this.skeleton.form.bind('submit', $.proxy(function(event) {
                    $('button[type=submit]:first, button:first', this.skeleton.form).trigger('click');
                    if (!options.form.active) {
                        event.preventDefault();
                    }
                }, this));

                // heredamos los eventos, desde el overlay:
                this.overlay.element.bind('show', $.proxy(function() {
                    $(this).triggerHandler('show');
                }, this));
                this.overlay.element.bind('hide', $.proxy(function() {
                    $(this).triggerHandler('close');
                }, this));

            },

            show: function(txt, options, callback) {
                var types = ['alert', 'info', 'error', 'confirm'];

                this.skeleton.msgbox.queue(this.options.name, $.proxy(function(next) {

                    options = $.extend(true, {
                        type: 'alert',
                        form: {
                            'active': false
                        }
                    }, options || {});

                    if (typeof options.buttons === "undefined") {
                        if (options.type === 'confirm') {
                            var buttons = [{
                                type: 'submit',
                                value: 'Ok'
                            }, {
                                type: 'cancel',
                                value: 'Cancel'
                            }];
                        } else if (options.type !== 'confirm') {
                            //buttons = [];
                            buttons = [{
                                type: 'submit',
                                value: 'Ok'
                            }];

                        }
                    } else {
                        buttons = options.buttons;
                    }



                    this.callback = $.isFunction(callback) ? callback : function(e) {};



                    this.skeleton.buttons = $('<div class="' + this.options.name + '-buttons"></div>');
                    this.skeleton.form.append(this.skeleton.buttons);

                    if (options.form.active) {
                        this.skeleton.form.attr('action', options.form.action === undefined ? '#' : options.form.action);
                        this.skeleton.form.attr('method', options.form.method === undefined ? 'post' : options.form.method);
                        this.options.form.active = true;
                    } else {
                        this.skeleton.form.attr('action', '#');
                        this.skeleton.form.attr('method', 'post');
                        this.options.form.active = false;
                    }

                        $.each(buttons, $.proxy(function(i, button) {
                            if (button.type === 'submit') {
                                this.skeleton.buttons.append($('<button type="submit" class="' + this.options.name + '-button-submit ' + (button["class"] || "") + '">' + button.value + '</button>').bind('click', $.proxy(function(e) {
                                    this.close(button.value);
                                    e.preventDefault();
                                }, this)));
                            } else if (button.type === 'cancel') {
                                this.skeleton.buttons.append($('<button type="button" class="' + this.options.name + '-button-cancel ' + (button["class"] || "") + '">' + button.value + '</button>').bind('click', $.proxy(function(e) {
                                    this.close(false);
                                    e.preventDefault();
                                }, this)));
                            }
                        }, this));
                        
                    this.skeleton.wrapper.prepend('<div class="' + this.options.name + '-text">' + txt + '</div>');

                    $.each(types, $.proxy(function(i, e) {
                        this.skeleton.msgbox.removeClass('error alert confirm info');
//                        this.skeleton.wrapper.removeClass(this.options.name + '-' + e);
                        this.skeleton.wrapper.find('.fa').removeClass('fa-info fa-confirm fa-alert fa-error');
                    }, this));

                    this.skeleton.msgbox.addClass(options.type);
//                    this.skeleton.wrapper.addClass(this.options.name + '-' + options.type);
                    this.skeleton.wrapper.find('.fa').addClass('fa-' + options.type);

                    this.moveBox(); // set initial position

                    this.visible = true;
                    this.overlay.show();


                    this.skeleton.msgbox.css({
                        left: (($(document).width() - this.options.width) / 2)
                    });

                    this.moveBox();

                    setTimeout($.proxy(function() {
                        var b = $('button', this.skeleton.msgbox);
                        if (b.length) {
                            b.get(0).focus();
                        }
                    }, this), this.options.moveDuration);
                }, this));


                this.i++;

                if (this.i == 1) {
                    this.skeleton.msgbox.dequeue(this.options.name);
                }

            },

            toArguments: function(array) {
                return $.map(array, function(a) {
                    return $(a).val();
                });
            },

            moveBox: function() {
                var size = {
                    x: $(window).width(),
                    y: $(window).height()
                };
                var scroll = {
                    x: $(window).scrollLeft(),
                    y: $(window).scrollTop()
                };
                var height = this.skeleton.msgbox.outerHeight();
                var y = 0;
                var x = 0;

                // vertically center
                y = scroll.x + ((size.x - this.options.width) / 2);

                if (this.options.emergefrom == "bottom") {
                    x = (scroll.y + size.y + 80);
                } else // top
                {
                    x = (scroll.y - height) - 80;
                }

				this.skeleton.msgbox.addClass('show');
                this.skeleton.msgbox.css({
                    left: y,
//                    top: scroll.y + ((size.y - height) / 2)
// only allow msgbox to drop 100px from top
					top: scroll.y + 100

                });

            },

            close: function(param) {


                this.visible = false;

                if ($.isFunction(this.callback)) {
                    this.callback.apply(this, $.makeArray(param));
                }

                setTimeout($.proxy(function() {
                    this.i--;
                    this.skeleton.msgbox.dequeue(this.options.name);
                }, this), this.options.closeDuration);

                if (this.i == 1) {
                    this.overlay.hide();
                }

                this.moveBox();
                this.skeleton.form.empty();
				this.skeleton.wrapper.find('.' + this.options.name + '-text').empty();
				this.skeleton.msgbox.css({
				    top : 0,
				    left : 0
				});
                this.skeleton.msgbox.removeClass('show error alert confirm info');
                
            },

        },

        msgbox: function(txt, options, callback) {
            if (typeof txt == "object") {
                $.MsgBoxObject.config(txt);
            } else {
                return $.MsgBoxObject.show(txt, options, callback);
            }
        }

    });

    $(function() {
            $.MsgBoxObject.create();
    });
})(jQuery);